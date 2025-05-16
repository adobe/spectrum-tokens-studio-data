const fs = require('fs');
const path = require('path');

/**
 * Change the name of this variable to the prefix (parent) object name
 * that you want to apply to all the values in the JSON file.
 */
const parentObjectName = 'colorTheme';
/**
 * If true, the script will update the values in the Color tokens.
 * If false, the script will update the values in the Non-Color tokens.
 */
const colorTokens = true;
/**
 * The name of the public collection that you want to update.
 */
const privateCollectionName = 'Color theme';

const subFolder = (isColorTokens) ? 'spectrum2-colors' : 'spectrum2-non-colors';
const dir = path.join('src', 'tokens-studio', subFolder, privateCollectionName);

function processDir(currentDir) {
  const files = fs.readdirSync(currentDir);
  files.forEach(file => {
    const filePath = path.join(currentDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath); // Recurse into subdirectory
    } else if (file.endsWith('.json')) {
      console.log('Processing:', filePath);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const wrapped = { parentObjectName: content };
      fs.writeFileSync(filePath, JSON.stringify(wrapped, null, 2));
      console.log(`Nested content under "colorTheme" in: ${filePath}`);
    }
  });
}

if (!fs.existsSync(dir)) {
  console.error('Directory does not exist:', dir);
  process.exit(1);
}

processDir(dir);