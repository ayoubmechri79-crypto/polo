# ============================================================
# POLO AI — Production Dockerfile
# Node.js 20 + Chromium for whatsapp-web.js (Puppeteer)
# ============================================================

FROM node:20

ENV DEBIAN_FRONTEND=noninteractive

# Install Chromium + dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-thai-tlwg \
    fonts-kacst \
    fonts-freefont-ttf \
    fonts-noto-color-emoji \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set Puppeteer to use installed Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV CHROME_PATH=/usr/bin/chromium

# Create app directory
WORKDIR /app

# Copy package files first (for better Docker caching)
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install backend dependencies
WORKDIR /app/backend
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev

# Install frontend dependencies and build
WORKDIR /app/frontend
RUN npm ci 2>/dev/null || npm install
COPY frontend/ ./
RUN npm run build

# Copy backend source
WORKDIR /app/backend
COPY backend/ ./

# Copy built frontend to backend for serving
RUN cp -r /app/frontend/dist ./public_html

# Set working directory
WORKDIR /app/backend

# Expose single port
EXPOSE 3002

# Start the server
CMD ["node", "server.js"]
