const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'tokens-studio', 'spectrum2-colors', 'Color theme');

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
      const wrapped = { colorTheme: content };
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