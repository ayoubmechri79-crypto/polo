const fs = require('fs');
const scriptContent = fs.readFileSync('scratch_script.js', 'utf8');

// We can extract the allProducts array using a quick regex and evaluation.
// It starts with 'const allProducts = [' and ends with the matching bracket.
// Actually, it's safer to just replace 'const allProducts =' with 'module.exports =' 
// but it contains DOM stuff later. Let's isolate the array string.

const startIndex = scriptContent.indexOf('const allProducts = [');
if (startIndex !== -1) {
    let bracketCount = 0;
    let endIndex = -1;
    let inString = false;
    let stringChar = '';

    for (let i = startIndex + 'const allProducts = '.length; i < scriptContent.length; i++) {
        const char = scriptContent[i];
        
        if (!inString) {
            if (char === '"' || char === "'") {
                inString = true;
                stringChar = char;
            } else if (char === '[') {
                bracketCount++;
            } else if (char === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    endIndex = i + 1;
                    break;
                }
            }
        } else {
            if (char === stringChar && scriptContent[i-1] !== '\\') {
                inString = false;
            }
        }
    }

    if (endIndex !== -1) {
        const arrayStr = scriptContent.substring(startIndex + 'const allProducts = '.length, endIndex);
        
        // Use Function constructor to safely evaluate the array literal
        const getProducts = new Function(`return ${arrayStr};`);
        const products = getProducts();
        
        // Add full URLs to images
        const BASE_URL = 'https://reflaxball.netlify.app/';
        const cleanedProducts = products.map(p => {
            if (p.image) p.image = p.image.startsWith('http') ? p.image : BASE_URL + p.image;
            if (p.gallery) p.gallery = p.gallery.map(img => img.startsWith('http') ? img : BASE_URL + img);
            return p;
        });

        fs.writeFileSync('products.json', JSON.stringify(cleanedProducts, null, 2));
        console.log(`Extracted ${cleanedProducts.length} products to products.json`);
    } else {
        console.log("Could not find end of allProducts array");
    }
} else {
    console.log("Could not find start of allProducts array");
}
