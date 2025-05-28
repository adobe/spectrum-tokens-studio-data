const fs = require('fs');
const path = require('path');

const baseDir = path.join('src', 'tokens-studio', 'spectrum2-non-colors');

// Thematic groups for key renaming
const componentGroups = [
  'accordion', 'component', 'field', 'slider', 'body', 'icon', 'checkmark', 'arrow', 'asterisk', 'chevron', 'add', 'android', 'border', 'color', 'character-count', 'content-area', 'disclosure-indicator', 'visual', 'text', 'control', 'track', 'palette', 'font', 'cjk', 'serif', 'sans-serif', 'black', 'bold', 'default', 'extra-bold'
];

const spatialGroups = [
  'bottom-to-text', 'bottom-to-control', 'bottom-to-content', 'bottom-to-visual', 'top-to-content', 'top-to-text', 'edge-to-content', 'edge-to-visual', 'edge-to-visual-only', 'edge-to-text', 'edge-to-control', 'edge-to-disclosure-indicator', 'edge-to-field', 'edge-to-track', 'edge-to-icon', 'content-area-bottom-to-content', 'content-area-top-to-content', 'content-area-edge-to-content', 'disclosure-indicator-to-text', 'character-count-to-field-quiet'
];

const sizeGroups = [
  'compact', 'regular', 'spacious', 'quiet', 'emphasized', 'strong', 'font-style', 'font-weight', 'font-family', 'line-height', 'letter-spacing', 'size', 'width', 'height', 'multiplier', 'track-width', 'icon-size', 'margin-multiplier'
];

const numericSuffixes = [
  '25', '50', '75', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', 'small', 'medium', 'large', 'extra-large', 'extra-small', 'xxl', 'xl', 'l', 'm', 's', 'xs', 'xxxl', 'xxs'
];

// Sort groups by descending length for longest match first
const allGroups = [
  ...spatialGroups,
  ...componentGroups,
  ...sizeGroups,
  ...numericSuffixes
].sort((a, b) => b.split('-').length - a.split('-').length);

function getAllJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file === 'Platform scale') return; // skip this directory
      results = results.concat(getAllJsonFiles(filePath));
    } else if (file === 'modeless.json') {
      results.push(filePath);
    }
  });
  return results;
}

function capitalizeGroup(group) {
  // Split group into words
  const words = group.split(' ');
  // Check for emoji or non-alphanumeric at the start
  if (/^[^\w\d]/.test(words[0]) && words.length > 1) {
    // If the word after emoji is 'cjk', uppercase it
    if (words[1].toLowerCase() === 'cjk') {
      words[1] = 'CJK';
    } else {
      words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    }
    return words.join(' ');
  }
  if (words[0].toLowerCase() === 'cjk') {
    words[0] = 'CJK';
  } else {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  }
  return words.join(' ');
}

function renameKey(key) {
  const parts = key.split('-');
  const newGroups = [];
  let i = 0;
  while (i < parts.length) {
    let found = false;
    for (const group of allGroups) {
      const groupParts = group.split('-');
      if (parts.slice(i, i + groupParts.length).join('-') === group) {
        newGroups.push(group.replace(/-/g, ' '));
        i += groupParts.length;
        found = true;
        break;
      }
    }
    if (found) continue;
    newGroups.push(parts[i]);
    i++;
  }
  // Capitalize first word of each group, and always uppercase 'cjk'
  return newGroups.map(capitalizeGroup).join('/');
}

const files = getAllJsonFiles(baseDir);
files.forEach(filePath => {
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let changed = false;
    const newJson = {};
    Object.keys(json).forEach(key => {
      const newKey = renameKey(key);
      if (newKey !== key) {
        console.log(`${key} => ${newKey}`);
        changed = true;
      }
      newJson[newKey] = json[key];
    });
    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(newJson, null, 2));
    }
  } catch (e) {
    console.error('Error reading', filePath, e.message);
  }
});

// Also process $themes.json for Modeless $figmaVariableReferences
const themesPath = path.join(baseDir, '$themes.json');
if (fs.existsSync(themesPath)) {
  try {
    const themesJson = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
    let changed = false;
    if (Array.isArray(themesJson)) {
      themesJson.forEach(obj => {
        if (obj && obj.name === 'Modeless' && obj.$figmaVariableReferences) {
          const newRefs = {};
          Object.keys(obj.$figmaVariableReferences).forEach(key => {
            const newKey = renameKey(key);
            if (newKey !== key) changed = true;
            newRefs[newKey] = obj.$figmaVariableReferences[key];
          });
          obj.$figmaVariableReferences = newRefs;
        }
      });
    } else if (typeof themesJson === 'object') {
      // If $themes.json is an object with a 'themes' array or similar
      const arr = Array.isArray(themesJson.themes) ? themesJson.themes : [];
      arr.forEach(obj => {
        if (obj && obj.name === 'Modeless' && obj.$figmaVariableReferences) {
          const newRefs = {};
          Object.keys(obj.$figmaVariableReferences).forEach(key => {
            const newKey = renameKey(key);
            if (newKey !== key) changed = true;
            newRefs[newKey] = obj.$figmaVariableReferences[key];
          });
          obj.$figmaVariableReferences = newRefs;
        }
      });
    }
    if (changed) {
      fs.writeFileSync(themesPath, JSON.stringify(themesJson, null, 2));
      console.log('Updated $figmaVariableReferences keys in $themes.json for Modeless');
    }
  } catch (e) {
    console.error('Error processing $themes.json:', e.message);
  }
} 