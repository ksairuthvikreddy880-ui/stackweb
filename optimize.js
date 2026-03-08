// Build Optimization Script
// Run this to minify and optimize assets for production

const fs = require('fs');
const path = require('path');

// Simple CSS minifier
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around punctuation
        .replace(/;}/g, '}') // Remove last semicolon
        .trim();
}

// Simple JS minifier (basic)
function minifyJS(js) {
    return js
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .replace(/\/\/.*/g, '') // Remove single-line comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s*([{}();,:])\s*/g, '$1') // Remove spaces around punctuation
        .trim();
}

// Minify CSS files
function optimizeCSS() {
    const cssFiles = ['styles.css', 'portfolio.css', 'project-form.css'];
    
    cssFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const css = fs.readFileSync(file, 'utf8');
            const minified = minifyCSS(css);
            const outputFile = file.replace('.css', '.min.css');
            fs.writeFileSync(outputFile, minified);
            console.log(`✓ Minified ${file} -> ${outputFile}`);
            console.log(`  Size: ${css.length} -> ${minified.length} bytes (${Math.round((1 - minified.length/css.length) * 100)}% reduction)`);
        }
    });
}

// Minify JS files
function optimizeJS() {
    const jsFiles = ['app.js', 'portfolio.js', 'project-form.js'];
    
    jsFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const js = fs.readFileSync(file, 'utf8');
            const minified = minifyJS(js);
            const outputFile = file.replace('.js', '.min.js');
            fs.writeFileSync(outputFile, minified);
            console.log(`✓ Minified ${file} -> ${outputFile}`);
            console.log(`  Size: ${js.length} -> ${minified.length} bytes (${Math.round((1 - minified.length/js.length) * 100)}% reduction)`);
        }
    });
}

// Generate .htaccess for Apache servers
function generateHtaccess() {
    const htaccess = `# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Enable Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Enable Keep-Alive
<IfModule mod_headers.c>
    Header set Connection keep-alive
</IfModule>

# Leverage Browser Caching
<IfModule mod_headers.c>
    <FilesMatch "\\.(ico|pdf|flv|jpg|jpeg|png|gif|webp|js|css|swf)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</IfModule>
`;
    
    fs.writeFileSync('.htaccess', htaccess);
    console.log('✓ Generated .htaccess for Apache optimization');
}

// Main execution
console.log('🚀 Starting optimization...\n');
optimizeCSS();
console.log('');
optimizeJS();
console.log('');
generateHtaccess();
console.log('\n✅ Optimization complete!');
console.log('\nNext steps:');
console.log('1. Update HTML files to use .min.css and .min.js files');
console.log('2. Convert images to WebP format');
console.log('3. Deploy to production server');
