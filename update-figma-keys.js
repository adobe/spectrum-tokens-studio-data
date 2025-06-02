const fs = require('fs');
const path = require('path');

// Utility to normalize keys for matching
function normalizeKey(key) {
  return key.toLowerCase().replace(/[\/]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Load JSON file
function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Main update function
function updateFigmaKeys() {
  const themesPath = path.join('src/tokens-studio/spectrum2-non-colors/$themes.json');
  const modelessGlobalPath = path.join('src/tokens-studio/spectrum2-non-colors/Typography/global/modeless.json');
  const modelessComponentPath = path.join('src/tokens-studio/spectrum2-non-colors/Typography/component/modeless.json');

  const themes = loadJson(themesPath);
  const modelessGlobal = loadJson(modelessGlobalPath);
  const modelessComponent = loadJson(modelessComponentPath);

  // Build normalized key maps
  const modelessKeyMap = {};
  for (const key of Object.keys(modelessGlobal)) {
    modelessKeyMap[normalizeKey(key)] = key;
  }
  for (const key of Object.keys(modelessComponent)) {
    modelessKeyMap[normalizeKey(key)] = key;
  }

  // Find the $figmaVariableReferences object (search all theme entries)
  let updated = false;
  let report = [];
  for (const themeKey in themes) {
    const theme = themes[themeKey];
    if (theme && theme.$figmaVariableReferences) {
      const refs = theme.$figmaVariableReferences;
      const newRefs = {};
      for (const oldKey in refs) {
        const norm = normalizeKey(oldKey);
        if (modelessKeyMap[norm]) {
          newRefs[modelessKeyMap[norm]] = refs[oldKey];
          report.push({ old: oldKey, new: modelessKeyMap[norm] });
        } else {
          newRefs[oldKey] = refs[oldKey];
          report.push({ old: oldKey, new: null });
        }
      }
      theme.$figmaVariableReferences = newRefs;
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(themesPath, JSON.stringify(themes, null, 2));
    console.log('Updated $themes.json with new keys.');
    console.log('--- Key Mapping Report ---');
    for (const entry of report) {
      if (entry.new) {
        console.log(`MATCH: "${entry.old}" -> "${entry.new}"`);
      } else {
        console.log(`NO MATCH: "${entry.old}"`);
      }
    }
  } else {
    console.log('No $figmaVariableReferences object found to update.');
  }
}

updateFigmaKeys(); 