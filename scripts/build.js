// Build script: copies ALL web source files into www/ for Cloudflare Pages + Capacitor
const fs   = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const www  = path.join(root, 'www');

// Single files to copy to www/ root
const filesToCopy = [
  'index.html',
  'privacy.html',
  'manifest.json',
  'sw.js',
  '_headers',
  '_redirects',
  'sitemap.xml',
  'robots.txt',
];

// Directories to copy recursively
const dirsToCopy = [
  'css',
  'js',
  'images',
  'flyer',
  'marketing',
];

// Ensure www/ exists
if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });

// Copy individual files
filesToCopy.forEach(f => {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(www, f));
    console.log(`✓ ${f}`);
  } else {
    console.warn(`⚠  ${f} not found — skipped`);
  }
});

// Recursive directory copy
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  });
}

dirsToCopy.forEach(d => {
  const src = path.join(root, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(www, d));
    console.log(`✓ ${d}/`);
  } else {
    console.warn(`⚠  ${d}/ not found — skipped`);
  }
});

console.log('\n✅ Build complete → www/');
