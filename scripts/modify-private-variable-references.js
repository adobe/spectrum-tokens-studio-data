// save as update-color-theme-values.js
const fs = require('fs');
const path = require('path');

/**
 * Set these variables before running the script.
 * You can if changing color or non-color tokens, the name of the public and private collections,
 * and the custom prefix (parent object name) for the values in the JSON file.
 * 
 * This will update the structure of the private collection, and the references to these tokens
 * within the public collection to correspond with the new structure.
 */
const colorTokens = false;
const publicCollectionNames = ['Iconography', 'Layout', 'Typography'];
const parentObjectName = 'platformScale';
const privateCollectionName = 'Platform scale';

function updateValues(obj, pathArr) {
  if (typeof obj !== 'object' || obj === null) return;

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      // If this object has a "value" field, update it
      if ('value' in obj[key]) {
        const dotPath = [parentObjectName, ...pathArr, key].join('.');
        obj[key].value = `{${dotPath}}`;
      }
      // Recurse into the object
      updateValues(obj[key], [...pathArr, key]);
    }
  }
}

function processFile(filePath) {
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  updateValues(json, []);
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  console.log(`Updated: ${filePath}`);
}

function getAllJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsonFiles(filePath));
    } else if (file.endsWith('.json')) {
      results.push(filePath);
    }
  });
  return results;
}

const subFolder = (colorTokens) ? 'spectrum2-colors' : 'spectrum2-non-colors';

// Usage: node update-color-theme-values.js
const baseDirs = publicCollectionNames.map(name => path.join('src', 'tokens-studio', subFolder, name));
const filesNested = baseDirs.map(baseDir => getAllJsonFiles(baseDir));
const files = filesNested.flat();
files.forEach(processFile);


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
      const wrapped = { [parentObjectName]: content };
      fs.writeFileSync(filePath, JSON.stringify(wrapped, null, 2));
      console.log(`Nested content under "${parentObjectName}" in: ${filePath}`);
    }
  });
}

if (!fs.existsSync(dir)) {
  console.error('Directory does not exist:', dir);
  process.exit(1);
}

processDir(dir);