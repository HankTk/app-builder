const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'icons');
const SOURCE_SVG = path.join(ICONS_DIR, 'icon.svg');
const OUTPUT_PNG = path.join(ICONS_DIR, 'source.png');

async function convertSvgToPng() {
  try {
    await sharp(SOURCE_SVG)
      .resize(1024, 1024)
      .png()
      .toFile(OUTPUT_PNG);
    console.log('SVG converted to PNG successfully!');
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng(); 