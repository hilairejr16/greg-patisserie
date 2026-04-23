// Build script: copies web source files into the www/ folder for Capacitor
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const www  = path.join(root, 'www');

const filesToCopy  = ['index.html', 'manifest.json', 'sw.js'];
const dirsToCopy   = ['css', 'js', 'images'];

if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });

filesToCopy.forEach(f => {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(www, f));
    console.log(`✓ ${f}`);
  }
});

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const s = path.join(src, item), d = path.join(dest, item);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  });
}

dirsToCopy.forEach(d => {
  const src = path.join(root, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(www, d));
    console.log(`✓ ${d}/`);
  }
});

console.log('\n✅ Build complete → www/');
