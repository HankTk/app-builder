const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ICONS_DIR = path.join(__dirname, '..', 'icons');
const SOURCE_ICON = path.join(ICONS_DIR, 'icon.svg');

// Ensure icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Check if source icon exists
if (!fs.existsSync(SOURCE_ICON)) {
  console.error('Error: icon.svg not found in icons directory');
  process.exit(1);
}

async function generateIcons() {
  try {
    // Generate Linux icon (PNG)
    await sharp(SOURCE_ICON)
      .resize(1024, 1024)
      .png()
      .toFile(path.join(ICONS_DIR, 'icon.png'));

    // Generate Windows icon (ICO)
    await sharp(SOURCE_ICON)
      .resize(256, 256)
      .png()
      .toFile(path.join(ICONS_DIR, 'icon.ico'));

    // Generate macOS icon (ICNS)
    // First create a temporary iconset directory
    const iconsetDir = path.join(ICONS_DIR, 'icon.iconset');
    if (!fs.existsSync(iconsetDir)) {
      fs.mkdirSync(iconsetDir);
    }

    // Generate different sizes for macOS
    const sizes = [16, 32, 64, 128, 256, 512, 1024];
    for (const size of sizes) {
      await sharp(SOURCE_ICON)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsetDir, `icon_${size}x${size}.png`));
      
      // Generate retina versions
      if (size <= 512) {
        await sharp(SOURCE_ICON)
          .resize(size * 2, size * 2)
          .png()
          .toFile(path.join(iconsetDir, `icon_${size}x${size}@2x.png`));
      }
    }

    // Convert iconset to icns
    execSync(`iconutil -c icns ${iconsetDir} -o ${path.join(ICONS_DIR, 'icon.icns')}`);

    // Clean up temporary iconset directory
    fs.rmSync(iconsetDir, { recursive: true, force: true });

    console.log('Icons generated successfully!');
    console.log('Generated files:');
    console.log('- icons/icon.png (Linux)');
    console.log('- icons/icon.ico (Windows)');
    console.log('- icons/icon.icns (macOS)');

  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons(); 