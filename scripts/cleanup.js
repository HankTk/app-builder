const fs = require('fs');
const path = require('path');

// Function to ensure release directory exists
function ensureReleaseDir() {
  const releaseDir = path.join(process.cwd(), 'release');
  if (!fs.existsSync(releaseDir)) {
    fs.mkdirSync(releaseDir);
  }
  return releaseDir;
}

// Function to move files to release directory
function moveToRelease(sourcePath, releaseDir) {
  const fileName = path.basename(sourcePath);
  const targetPath = path.join(releaseDir, fileName);
  
  if (fs.existsSync(sourcePath)) {
    console.log(`Moving ${fileName} to release directory`);
    fs.renameSync(sourcePath, targetPath);
  }
}

// Pre-build cleanup
function preBuildCleanup() {
  console.log('Performing pre-build cleanup...');
  const dirsToClean = ['dist', 'build'];
  
  dirsToClean.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      console.log(`Removing directory: ${dir}`);
      fs.rmSync(fullPath, { recursive: true, force: true });
    }
  });
}

// Post-build cleanup and organization
function postBuildCleanup() {
  console.log('Performing post-build cleanup and organization...');
  const releaseDir = ensureReleaseDir();
  const distDir = path.join(process.cwd(), 'dist');
  
  if (fs.existsSync(distDir)) {
    // Move mac-arm64 directory
    const macArm64Path = path.join(distDir, 'mac-arm64');
    if (fs.existsSync(macArm64Path)) {
      moveToRelease(macArm64Path, releaseDir);
    }
    
    // Move .dmg file
    const files = fs.readdirSync(distDir);
    files.forEach(file => {
      if (file.endsWith('.dmg')) {
        moveToRelease(path.join(distDir, file), releaseDir);
      }
    });
    
    // Remove dist directory
    console.log('Removing dist directory');
    fs.rmSync(distDir, { recursive: true, force: true });
  }
}

// Check if this is a pre-build or post-build cleanup
const isPreBuild = process.argv.includes('--pre-build');

if (isPreBuild) {
  preBuildCleanup();
} else {
  postBuildCleanup();
}

console.log('Cleanup completed successfully!'); 