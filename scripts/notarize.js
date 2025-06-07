require('dotenv').config();
const { execSync } = require('child_process');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;
  const appPath = `${appOutDir}/${appName}.app`;

  console.log('Starting notarization process...');
  console.log('App path:', appPath);

  // Extract team ID from CSC_NAME environment variable
  const teamId = process.env.CSC_NAME ? process.env.CSC_NAME.match(/\(([^)]+)\)/)[1] : null;

  if (!process.env.APPLEID || !process.env.APPLEIDPASS || !teamId) {
    console.error('Missing required environment variables for notarization');
    console.error('Required: APPLEID, APPLEIDPASS, and CSC_NAME');
    return;
  }

  try {
    // Create a temporary zip file for notarization
    const zipPath = `${appPath}.zip`;
    execSync(`ditto -c -k --keepParent "${appPath}" "${zipPath}"`);

    // Store credentials
    console.log('Storing credentials...');
    execSync(`xcrun notarytool store-credentials "AC_PASSWORD" --apple-id "${process.env.APPLEID}" --team-id "${teamId}" --password "${process.env.APPLEIDPASS}" --verbose`);

    // Submit for notarization using stored credentials
    console.log('Submitting app for notarization...');
    const notarizeCommand = `xcrun notarytool submit "${zipPath}" --keychain-profile "AC_PASSWORD" --wait`;
    console.log('Running command:', notarizeCommand);
    const result = execSync(notarizeCommand).toString();
    console.log('Notarization result:', result);

    // Clean up the temporary zip file
    execSync(`rm "${zipPath}"`);

    // Staple the notarization ticket to the app
    console.log('Stapling notarization ticket...');
    execSync(`xcrun stapler staple "${appPath}"`);

    console.log('Notarization completed successfully!');
  } catch (error) {
    console.error('Notarization failed:', error);
    throw error;
  }
}; 