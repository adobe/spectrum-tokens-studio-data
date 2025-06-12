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
    } else if (file.endsWith('.json') && file !== '$metadata.json') {
      results.push(filePath);
    }
  }
  return results;
}

function collectAllKeysAndRefs(jsonObj, keys = new Set(), platformRefs = new Set()) {
  if (typeof jsonObj !== 'object' || jsonObj === null) return;
  for (const [k, v] of Object.entries(jsonObj)) {
    keys.add(k);
    if (typeof v === 'object' && v !== null) {
      collectAllKeysAndRefs(v, keys, platformRefs);
    } else if (typeof v === 'string') {
      // Look for platformScale.[key] references
      const match = v.match(/\{platformScale\.([\w\-\. ]+)\}/);
      if (match) {
        platformRefs.add(match[1]);
      }
    }
  }
}

function main() {
  // 1. Collect all $figmaVariableReferences keys from $themes.json
  const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
  const themeKeys = new Set();
  for (const themeKey in themes) {
    const theme = themes[themeKey];
    if (theme && theme.$figmaVariableReferences) {
      for (const k of Object.keys(theme.$figmaVariableReferences)) {
        themeKeys.add(k);
      }
    }
  }

  // 2. Collect all keys and platformScale refs from all other JSON files
  const allFiles = getAllJsonFiles(baseDir);
  const allKeys = new Set();
  const allPlatformRefs = new Set();
  for (const file of allFiles) {
    if (file === themesPath) continue;
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      collectAllKeysAndRefs(data, allKeys, allPlatformRefs);
    } catch (e) {
      console.warn('Could not parse', file);
    }
  }

  // 3. Check for matches
  let matchCount = 0;
  let unmatched = [];
  for (const key of themeKeys) {
    if (allKeys.has(key) || allPlatformRefs.has(key)) {
      matchCount++;
    } else {
      unmatched.push(key);
    }
  }

  // 4. Output results
  console.log('--- Theme Key Match Report ---');
  console.log('Total $figmaVariableReferences keys:', themeKeys.size);
  console.log('Exact matches found:', matchCount);
  console.log('Unmatched keys:', unmatched.length);
  if (unmatched.length) {
    console.log('List of unmatched keys:');
    for (const k of unmatched) {
      console.log('-', k);
    }
  }
}

main(); 