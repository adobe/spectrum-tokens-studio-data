const fs = require('fs');
const path = require('path');

const TARGET_DIR = 'src/tokens-studio/spectrum2-non-colors';
const EXCLUDED_FILES = ['$themes.json', '$metadata.json'];

function processObject(obj, filePath) {
    let modified = false;
    
    // Process all keys in the current object
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // If the key contains "font-style" and has type "other"
            if (key.includes('font-style') && obj[key].type === 'other') {
                obj[key].type = 'text';
                modified = true;
                console.log(`Updated type in ${filePath} for key: ${key}`);
            }
            // Recursively process nested objects
            if (processObject(obj[key], filePath)) {
                modified = true;
            }
        }
    }
    
    return modified;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        
        if (processObject(data, filePath)) {
            // Only write back to file if modifications were made
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`Successfully updated ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (stat.isFile() && file.endsWith('.json') && !EXCLUDED_FILES.includes(file)) {
            processFile(filePath);
        }
    });
}

// Start processing
console.log('Starting to process files...');
walkDir(TARGET_DIR);
console.log('Finished processing files.'); 