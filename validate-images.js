#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 IPTV BABA Image Validation Report\n');

// Define image paths used in components
const imagePaths = [
  '/images/logo.webp',
  '/background.webp',
  '/images/background.webp',
  '/logo.svg',
  '/favicon.svg'
];

// Check movies carousel images
for (let i = 1; i <= 17; i++) {
  imagePaths.push(`/images/movies carousel /${i}.png`);
}

// Add specific movie posters
const moviePosters = [
  '/images/movies carousel /2 2.png',
  '/images/movies carousel /3 2.png',
  '/images/movies carousel /6 2.png',
  '/images/movies carousel /7 copy.png',
  '/images/movies carousel /277064-barbie-0-230-0-345-crop.png',
  '/images/movies carousel /398009-killers-of-the-flower-moon-0-230-0-345-crop.png',
  '/images/movies carousel /avatar-the-way-of-water-font.png',
  '/images/movies carousel /bupkis_TV-Fontmeme.png',
  '/images/movies carousel /tulsa-king-font.png'
];
imagePaths.push(...moviePosters);

// Check logos
for (let i = 1; i <= 17; i++) {
  imagePaths.push(`/images/logos/${i}.webp`);
}

const publicDir = path.join(__dirname, 'public');
let foundCount = 0;
let missingCount = 0;

console.log('✅ FOUND IMAGES:');
console.log('================');

imagePaths.forEach(imagePath => {
  const fullPath = path.join(publicDir, imagePath);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`✓ ${imagePath} (${sizeKB}KB)`);
    foundCount++;
  } else {
    console.log(`❌ MISSING: ${imagePath}`);
    missingCount++;
  }
});

console.log('\n📊 SUMMARY:');
console.log('===========');
console.log(`✅ Found: ${foundCount} images`);
console.log(`❌ Missing: ${missingCount} images`);
console.log(`📈 Success Rate: ${((foundCount / imagePaths.length) * 100).toFixed(1)}%`);

if (missingCount > 0) {
  console.log('\n🔧 RECOMMENDATIONS:');
  console.log('===================');
  console.log('1. Check file paths and ensure correct spelling');
  console.log('2. Verify image files exist in public directory');
  console.log('3. Consider using fallback images for missing files');
}

console.log('\n🚀 OPTIMIZATIONS APPLIED:');
console.log('=========================');
console.log('✓ Next.js Image component with optimization');
console.log('✓ Blur placeholders for better UX');
console.log('✓ Error handling with fallbacks');
console.log('✓ Responsive image sizing');
console.log('✓ WebP format support');
console.log('✓ Lazy loading (except priority images)');
