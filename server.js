const express = require('express');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const { getOrders, getInventory, updateInventoryItem, updateOrderStatus } = require('./services/firebase');
const { initializeWhatsApp, getWhatsAppStatus, stopWhatsApp } = require('./services/whatsapp');
// Instagram import moved to section 1.5 below

const { getProductInsights, getAllProductStats, getPeakHours } = require('./services/learningEngine');
const { createTrial, validateTrial, deactivateTrial, listTrials, trialMiddleware, blockTrialWrites } = require('./services/trialManager');
const tenantsService = require('./services/tenants');
const { startInstagramForTenant, getInstagramStatusForTenant, stopInstagramForTenant } = require('./services/instagram');
const { startWhatsAppForTenant, getWhatsAppStatusForTenant, stopWhatsAppForTenant } = require('./services/whatsapp');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Request timeout middleware
app.use((req, res, next) => {
    req.setTimeout(30000);
    res.setTimeout(30000);
    next();
});

// Apply trial middleware globally
app.use(trialMiddleware);

// Input validation wrapper
function validate(schema) {
    return (req, res, next) => {
        if (schema.body) {
            for (const [key, type] of Object.entries(schema.body)) {
                if (req.body[key] !== undefined && typeof req.body[key] !== type) {
                    return res.status(400).json({ error: `'${key}' must be of type ${type}` });
                }
            }
        }
        if (schema.params) {
            for (const [key, type] of Object.entries(schema.params)) {
                if (req.params[key] !== undefined && typeof req.params[key] !== type) {
                    return res.status(400).json({ error: `Param '${key}' must be of type ${type}` });
                }
            }
        }
        next();
    };
}

// --- API ROUTES ---

// 0. Security & Licensing
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true, token: 'authenticated_client' });
    } else {
        res.status(401).json({ success: false, error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
    }
});

app.get('/api/auth/check', (req, res) => {
    const expiryDate = new Date(process.env.LICENSE_EXPIRY_DATE);
    const now = new Date();
    const isExpired = now > expiryDate;
    res.json({ 
        expired: isExpired, 
        expiryDate: expiryDate.toISOString(),
        daysLeft: Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24))
    });
});

// Trial info endpoint (for frontend to detect trial mode)
app.get('/api/trial/info', (req, res) => {
    if (req.isTrialUser) {
        res.json({ 
            trialMode: true, 
            clientName: req.trialInfo.clientName,
            daysLeft: req.trialInfo.daysLeft,
            expiresAt: req.trialInfo.expiresAt
        });
    } else if (req.trialExpired) {
        res.status(403).json({ trialMode: true, expired: true, error: 'انتهت فترة التجربة' });
    } else {
        res.json({ trialMode: false });
    }
});

// Trial management (admin only)
app.post('/api/trial/create', blockTrialWrites, (req, res) => {
    const { durationDays = 7, clientName = 'زبون' } = req.body;
    const trial = createTrial(durationDays, clientName);
    
    // Build the full dashboard URL with trial token
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    const host = req.headers['x-forwarded-host'] || req.get('host');
    const dashboardUrl = `${protocol}://${host}?trial=${trial.token}`;
    
    res.json({ 
        success: true, 
        ...trial,
        dashboardUrl,
        message: `تم إنشاء رابط تجربة لـ "${clientName}" لمدة ${durationDays} أيام`
    });
});

app.get('/api/trial/list', blockTrialWrites, (req, res) => {
    res.json(listTrials());
});

app.post('/api/trial/deactivate', blockTrialWrites, (req, res) => {
    const { token } = req.body;
    if (deactivateTrial(token)) {
        res.json({ success: true, message: 'تم إلغاء التجربة' });
    } else {
        res.status(404).json({ error: 'رابط التجربة غير موجود' });
    }
});

// 1. Bot Management (block trial users from control)
app.get('/api/bot/status', (req, res) => {
    res.json(getWhatsAppStatus());
});

app.post('/api/bot/start', blockTrialWrites, async (req, res) => {
    try {
        const currentStatus = getWhatsAppStatus().status;
        if (currentStatus === 'DISCONNECTED') {
            // Clean Chrome before initializing
            const { cleanupChromeSession } = require('./services/whatsapp');
            if (typeof cleanupChromeSession === 'function') cleanupChromeSession();
            initializeWhatsApp(io);
            res.json({ success: true, message: 'Bot starting...' });
        } else {
            res.status(400).json({ success: false, message: 'البوت يعمل بالفعل أو في انتظار المسح.' });
        }
    } catch (err) {
        console.error('Bot start error:', err);
        res.status(500).json({ success: false, error: 'Failed to start bot: ' + err.message });
    }
});

app.post('/api/bot/stop', blockTrialWrites, async (req, res) => {
    try {
        await stopWhatsApp();
        res.json({ success: true, message: 'Bot stopped.' });
    } catch (err) {
        console.error('Bot stop error:', err);
        res.status(500).json({ success: false, error: 'Failed to stop bot: ' + err.message });
    }
});

app.post('/api/bot/restart', blockTrialWrites, async (req, res) => {
    try {
        await stopWhatsApp();
        const { cleanupChromeSession } = require('./services/whatsapp');
        if (typeof cleanupChromeSession === 'function') cleanupChromeSession();
        setTimeout(() => initializeWhatsApp(io), 1000);
        res.json({ success: true, message: 'Bot restarting...' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to restart bot: ' + err.message });
    }
});

// ==========================================
// 1.5 Instagram Management (Hybrid Stealth Bypass)
// ==========================================
const { initInstagram, getInstagramStatus, stopInstagram } = require('./services/instagram');

// Initialize default Instagram
initInstagram(io);

// ==========================================
// 1.6 Tenant Management (SaaS Multi-Tenancy)
// ==========================================

// Register new tenant (admin only)
app.post('/api/tenants/register', (req, res) => {
    const authHeader = req.headers.authorization;
    // Simple basic auth for admin
    if (!authHeader || authHeader !== 'Bearer admin_secret') {
        // We can just use the same admin logic
        const { adminUser, adminPass } = req.body;
        if (adminUser !== process.env.ADMIN_USERNAME || adminPass !== process.env.ADMIN_PASSWORD) {
             return res.status(401).json({ error: 'Unauthorized' });
        }
    }
    
    const tenant = tenantsService.createTenant(req.body);
    res.json({ success: true, tenant });
});

// Tenant login
app.post('/api/tenants/login', (req, res) => {
    const { accessCode } = req.body;
    const tenant = tenantsService.getTenantByAccessCode(accessCode);
    if (tenant) {
        res.json({ success: true, tenant });
    } else {
        res.status(401).json({ error: 'Invalid access code' });
    }
});

// Get tenant status
app.get('/api/tenants/:id/status', (req, res) => {
    const whatsappStatus = getWhatsAppStatusForTenant(req.params.id);
    const instagramStatus = getInstagramStatusForTenant(req.params.id);
    res.json({ whatsapp: whatsappStatus, instagram: instagramStatus });
});

// Start WhatsApp
app.post('/api/tenants/:id/whatsapp/start', (req, res) => {
    startWhatsAppForTenant(req.params.id, io);
    res.json({ success: true, message: 'WhatsApp starting...' });
});

// Stop WhatsApp
app.post('/api/tenants/:id/whatsapp/stop', (req, res) => {
    stopWhatsAppForTenant(req.params.id);
    res.json({ success: true, message: 'WhatsApp stopped.' });
});

// Start Instagram
app.post('/api/tenants/:id/instagram/start', (req, res) => {
    const tenant = tenantsService.getTenant(req.params.id);
    if (!tenant) return res.status(404).json({ error: 'Tenant not found' });
    if (!tenant.igUsername || !tenant.igPassword) {
        return res.status(400).json({ error: 'Instagram credentials not set' });
    }
    const decryptedPassword = tenantsService.decryptPassword(tenant.igPassword);
    startInstagramForTenant(tenant.id, tenant.igUsername, decryptedPassword, io);
    res.json({ success: true, message: 'Instagram starting...' });
});

// Stop Instagram
app.post('/api/tenants/:id/instagram/stop', (req, res) => {
    stopInstagramForTenant(req.params.id);
    res.json({ success: true, message: 'Instagram stopped.' });
});

// Update settings
app.put('/api/tenants/:id/settings', (req, res) => {
    const updated = tenantsService.updateTenant(req.params.id, req.body);
    res.json({ success: true, tenant: updated });
});

// Update Instagram credentials
app.put('/api/tenants/:id/instagram/credentials', (req, res) => {
    const { igUsername, igPassword } = req.body;
    const updated = tenantsService.updateTenant(req.params.id, { igUsername, igPassword });
    res.json({ success: true, message: 'Credentials updated' });
});

// Orders for tenant
app.get('/api/tenants/:id/orders', async (req, res) => {
    try {
        const orders = await getOrders();
        const tenantOrders = orders.filter(o => o.tenantId === req.params.id);
        res.json(tenantOrders);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Conversations (Mock for now, real implementation depends on DB)
app.get('/api/tenants/:id/conversations', (req, res) => {
    res.json([]);
});


app.get('/api/instagram/status', (req, res) => {
    res.json(getInstagramStatus());
});

app.post('/api/instagram/stop', (req, res) => {
    stopInstagram();
    res.json({ success: true, message: 'تم إيقاف الانستغرام' });
});

// 2. Orders Management (read for all, write blocked for trial)
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await getOrders();
        res.json(orders);
    } catch (error) {
        console.error('Failed to fetch orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders.' });
    }
});

app.put('/api/orders/:id/status', blockTrialWrites, validate({ params: { id: 'string' }, body: { status: 'string' } }), async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ['لم تتم معالجتها', 'قيد التوصيل', 'تمت بنجاح', 'ألغيت'];
        if (!status) return res.status(400).json({ error: 'Status is required' });
        if (!validStatuses.includes(status)) return res.status(400).json({ error: 'Invalid status value' });
        
        await updateOrderStatus(req.params.id, status);
        res.json({ success: true, message: 'Status updated' });
    } catch (error) {
        console.error('Failed to update status:', error);
        if (error.message === 'Order not found') {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(500).json({ error: 'Failed to update status.' });
    }
});

// 3. Inventory Management (read for all, write blocked for trial)
app.get('/api/inventory', async (req, res) => {
    try {
        const inventory = await getInventory();
        res.json(inventory);
    } catch (error) {
        console.error('Failed to fetch inventory:', error);
        res.status(500).json({ error: 'Failed to fetch inventory.' });
    }
});

app.post('/api/inventory', blockTrialWrites, async (req, res) => {
    try {
        const { id, name, price, description, ...extra } = req.body;
        if (!id) return res.status(400).json({ error: 'ID is required' });
        if (!name) return res.status(400).json({ error: 'Name is required' });
        
        const itemData = { name, price: price || 0, description: description || '', ...extra };
        await updateInventoryItem(id, itemData);
        res.json({ success: true, message: 'Inventory updated' });
    } catch (error) {
        console.error('Failed to update inventory:', error);
        res.status(500).json({ error: 'Failed to update inventory.' });
    }
});

app.delete('/api/inventory/:id', blockTrialWrites, async (req, res) => {
    try {
        await updateInventoryItem(req.params.id, null);
        res.json({ success: true, message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item.' });
    }
});

// 4. Learning Engine & Analytics
app.get('/api/analytics/insights', (req, res) => {
    try {
        const insights = getProductInsights();
        const stats = getAllProductStats();
        const peaks = getPeakHours();
        res.json({ insights, productStats: stats, peakHours: peaks });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch analytics.' });
    }
});

// ============================================================
// SERVE FRONTEND (Production: static files from build)
// ============================================================
const frontendPath = path.join(__dirname, 'public_html');
const fs = require('fs');

if (fs.existsSync(frontendPath)) {
    app.use(express.static(frontendPath));
    // SPA fallback — serve index.html for all non-API routes
    app.use((req, res, next) => {
        if (!req.path.startsWith('/api') && !req.path.startsWith('/socket.io')) {
            res.sendFile(path.join(frontendPath, 'index.html'));
        } else {
            next();
        }
    });
    console.log('📦 Serving frontend from:', frontendPath);
} else {
    console.log('⚠️ No frontend build found. Run "npm run build" in frontend/ first, or use Vite dev server.');
}

// Socket.io for real-time QR code updates
io.on('connection', (socket) => {
    console.log('A client connected to the dashboard');
    
    // Default / Backward compatible
    socket.emit('whatsapp_status', getWhatsAppStatus());
    try {
        const { getInstagramStatus } = require('./services/instagram');
        socket.emit('instagram_status', getInstagramStatus());
    } catch(e) {}
    
    // Multi-tenant
    socket.on('join_tenant', (tenantId) => {
        socket.join(`tenant_${tenantId}`);
        socket.emit('whatsapp_status', getWhatsAppStatusForTenant(tenantId));
        socket.emit('instagram_status', getInstagramStatusForTenant(tenantId));
        console.log(`Client joined room tenant_${tenantId}`);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 POLO Backend is running on port ${PORT}`);
    console.log(`📡 Dashboard: http://localhost:${PORT}`);
});
