// save as update-color-theme-values.js
const fs = require('fs');
const path = require('path');

function updateValues(obj, pathArr) {
  if (typeof obj !== 'object' || obj === null) return;

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      // If this object has a "value" field, update it
      if ('value' in obj[key]) {
        const dotPath = ['colorTheme', ...pathArr, key].join('.');
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

// Usage: node update-color-theme-values.js
const baseDir = path.join('src', 'tokens-studio', 'spectrum2-colors', 'Color');
const files = getAllJsonFiles(baseDir);
files.forEach(processFile);