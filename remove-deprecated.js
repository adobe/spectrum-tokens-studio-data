const fs = require('fs');
const path = require('path');

function removeDeprecatedTokens(jsonData) {
    if (Array.isArray(jsonData)) {
        return jsonData.map(item => removeDeprecatedTokens(item));
    }
    
    if (typeof jsonData === 'object' && jsonData !== null) {
        const result = {};
        
        for (const [key, value] of Object.entries(jsonData)) {
            if (!key.startsWith('🚫')) {
                // Check if the value contains a platformScale reference
                if (typeof value === 'object' && value !== null && value.value) {
                    const newValue = { ...value };
                    // Remove 🚫 from platformScale references
                    if (typeof newValue.value === 'string' && newValue.value.includes('platformScale.🚫')) {
                        newValue.value = newValue.value.replace('platformScale.🚫', 'platformScale.');
                    }
                    result[key] = removeDeprecatedTokens(newValue);
                } else if (typeof value === 'string' && value.includes('platformScale.🚫')) {
                    // Handle platformScale references in $themes.json
                    result[key] = value.replace('platformScale.🚫', 'platformScale.');
                } else {
                    result[key] = removeDeprecatedTokens(value);
                }
            }
        }
        
        return result;
    }
    
    return jsonData;
}

function processFile(filePath) {
    try {
        // Read the JSON file
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(jsonContent);
        
        // Remove deprecated tokens
        const cleanedData = removeDeprecatedTokens(jsonData);
        
        // Write back to the file with proper formatting
        fs.writeFileSync(filePath, JSON.stringify(cleanedData, null, 2));
        
        console.log(`Successfully processed ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

function processDirectory(directoryPath) {
    try {
        const items = fs.readdirSync(directoryPath);
        
        for (const item of items) {
            const fullPath = path.join(directoryPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Recursively process subdirectories
                processDirectory(fullPath);
            } else if (stat.isFile() && path.extname(fullPath) === '.json') {
                // Process JSON files
                processFile(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${directoryPath}:`, error.message);
    }
}

// Get the directory path from command line argument
const directoryPath = process.argv[2];

if (!directoryPath) {
    console.error('Please provide a directory path as an argument');
    process.exit(1);
}

processDirectory(directoryPath); 