const fs = require('fs');
const path = require('path');

const baseDir = path.join('src/tokens-studio/spectrum2-non-colors');
const themesPath = path.join(baseDir, '$themes.json');

function getAllJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsonFiles(filePath));
    } else if (file.endsWith('.json')) {
      results.push(filePath);
    }
  }
  return results;
}

function collectModelessAndPlatformKeys() {
  const files = getAllJsonFiles(baseDir);
  const keySet = new Set();

  for (const file of files) {
    if (file.endsWith('modeless.json')) {
      try {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        Object.keys(data).forEach(k => keySet.add(k));
      } catch {}
    }
    if (file.includes('/Platform scale/')) {
      try {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        Object.keys(data).forEach(parentKey => {
          const val = data[parentKey];
          if (val && typeof val === 'object') {
            Object.keys(val).forEach(childKey => {
              keySet.add(`${parentKey}.${childKey}`);
            });
          }
        });
      } catch {}
    }
  }
  return keySet;
}

function collectFigmaVariableReferenceKeys() {
  const data = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
  const keys = new Set();
  for (const themeKey in data) {
    const theme = data[themeKey];
    if (theme && theme.$figmaVariableReferences) {
      Object.keys(theme.$figmaVariableReferences).forEach(k => keys.add(k));
    }
  }
  return keys;
}

function main() {
  const sourceKeys = collectModelessAndPlatformKeys();
  const themeKeys = collectFigmaVariableReferenceKeys();

  const matches = [];
  const noMatches = [];

  for (const key of themeKeys) {
    if (sourceKeys.has(key)) {
      matches.push(key);
    } else {
      noMatches.push(key);
    }
  }

  // Only write no-matches to file if there are any
  if (noMatches.length > 0) {
    const outputPath = path.join(__dirname, 'invalid-keys');
    fs.writeFileSync(outputPath, noMatches.join('\n'));
    console.log(`No-match keys written to: ${outputPath}`);
  }

  console.log('Validation Results:');
  console.log('-------------------');
  console.log(`Matches: ${matches.length}`);
  console.log(`No Matches: ${noMatches.length}`);
}

main(); 