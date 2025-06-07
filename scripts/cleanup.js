const fs = require('fs');
const path = require('path');

// Directories to clean
const dirsToClean = [
  'dist/tmp',
  'dist/out-tsc',
  'dist/coverage',
  'dist/.nx',
  'dist/.angular',
  'build/tmp',
  'build',
  'tmp',
  'dist/apps',    // Added to clean
  'dist/libs'     // Added to clean
];

// Files to clean (keeping only .dmg)
const filesToClean = [
  'dist/latest-mac.yml',
  'dist/builder-debug.yml',
  'dist/builder-effective-config.yaml',
  'dist/*.blockmap',
  'dist/*.zip'    // Added to clean zip files
];

// Clean directories
dirsToClean.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    console.log(`Cleaning directory: ${dir}`);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
});

// Clean files
filesToClean.forEach(pattern => {
  const dir = path.dirname(pattern);
  const basePattern = path.basename(pattern);
  const fullDir = path.join(process.cwd(), dir);
  
  if (fs.existsSync(fullDir)) {
    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
      if (file.match(basePattern.replace('*', '.*'))) {
        const filePath = path.join(fullDir, file);
        console.log(`Cleaning file: ${filePath}`);
        try {
          fs.unlinkSync(filePath);
        } catch (error) {
          console.error(`Error deleting file ${filePath}:`, error.message);
        }
      }
    });
  }
});

// Keep only mac-arm64 directory and .dmg file
const essentialDirs = ['dist/mac-arm64'];
const distDir = path.join(process.cwd(), 'dist');

// Remove any other directories in dist that are not essential
if (fs.existsSync(distDir)) {
  const items = fs.readdirSync(distDir);
  items.forEach(item => {
    const itemPath = path.join(distDir, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    const isEssential = essentialDirs.some(dir => itemPath.includes(dir));
    
    if (isDir && !isEssential) {
      console.log(`Removing non-essential directory: ${itemPath}`);
      fs.rmSync(itemPath, { recursive: true, force: true });
    }
  });
}

console.log('Cleanup completed successfully!');
console.log('Note: Only mac-arm64 directory and .dmg file have been preserved.'); 