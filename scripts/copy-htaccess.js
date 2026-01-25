const fs = require('fs');
const path = require('path');

// Copy .htaccess to out directory after build
const source = path.join(__dirname, '..', '.htaccess');
const dest = path.join(__dirname, '..', 'out', '.htaccess');

if (fs.existsSync(source)) {
  if (!fs.existsSync(path.join(__dirname, '..', 'out'))) {
    console.log('out/ directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }
  
  fs.copyFileSync(source, dest);
  console.log('✓ .htaccess copied to out/ directory');
} else {
  console.log('.htaccess file not found');
}
