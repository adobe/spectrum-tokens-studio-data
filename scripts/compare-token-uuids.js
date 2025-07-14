const fs = require('fs');
const path = require('path');

// Function to recursively get all JSON files in a directory
function getAllJsonFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(getAllJsonFiles(filePath));
        } else if (file.endsWith('.json')) {
            results.push(filePath);
        }
    });
    
    return results;
}

// Function to extract UUIDs and their token keys from a file
function extractUuidsFromFile(filePath, isPlatformScale = false) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const uuids = new Map();
    
    function processObject(obj, prefix = '') {
        if (typeof obj !== 'object' || obj === null) return;

        // Handle Platform scale structure
        if (isPlatformScale && obj.platformScale) {
            processObject(obj.platformScale, 'platformScale.');
            return;
        }

        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null) {
                // Check for UUID in current object
                if (value.$extensions?.['spectrum-tokens']?.uuid) {
                    const tokenKey = prefix + key;
                    const uuid = value.$extensions['spectrum-tokens'].uuid;
                    // For Platform scale, store the key without the 'platformScale.' prefix
                    const storedKey = isPlatformScale ? key : tokenKey;
                    uuids.set(uuid, {
                        key: storedKey,
                        uuid: uuid,
                        fullKey: tokenKey
                    });
                }
                
                // Continue processing nested objects
                processObject(value, prefix + key + '.');
            }
        }
    }
    
    processObject(content);
    return uuids;
}

// Main function to compare UUIDs
async function compareTokenUuids() {
    const platformScaleDir = path.join(__dirname, '..', 'src', 'tokens-studio', 'spectrum2-non-colors', 'Platform scale');
    const otherDir = path.join(__dirname, '..', 'src', 'tokens-studio', 'spectrum2-non-colors');
    
    console.log('Platform Scale directory:', platformScaleDir);
    console.log('Other directory:', otherDir);
    
    // Get all JSON files
    const platformScaleFiles = getAllJsonFiles(platformScaleDir);
    const otherFiles = getAllJsonFiles(otherDir)
        .filter(file => !file.includes('Platform scale'));
    
    console.log(`Found ${platformScaleFiles.length} Platform Scale files`);
    console.log(`Found ${otherFiles.length} Other files`);
    
    // Extract UUIDs from Platform Scale files
    const platformScaleUuids = new Map();
    const otherUuids = new Map();
    
    platformScaleFiles.forEach(file => {
        console.log('Processing Platform Scale file:', file);
        const fileUuids = extractUuidsFromFile(file, true);
        console.log(`Found ${fileUuids.size} UUIDs in ${file}`);
        fileUuids.forEach((value, key) => platformScaleUuids.set(key, value));
    });
    
    // Extract UUIDs from other files
    otherFiles.forEach(file => {
        console.log('Processing Other file:', file);
        const fileUuids = extractUuidsFromFile(file, false);
        console.log(`Found ${fileUuids.size} UUIDs in ${file}`);
        fileUuids.forEach((value, key) => otherUuids.set(key, value));
    });
    
    console.log(`Total Platform Scale UUIDs: ${platformScaleUuids.size}`);
    console.log(`Total Other UUIDs: ${otherUuids.size}`);
    
    // Find tokens in Platform scale missing in other collections
    const missingInOther = [];
    platformScaleUuids.forEach((value, uuid) => {
        if (!otherUuids.has(uuid)) {
            missingInOther.push(value);
        }
    });
    
    // Find tokens in other collections missing in Platform scale
    const missingInPlatformScale = [];
    otherUuids.forEach((value, uuid) => {
        if (!platformScaleUuids.has(uuid)) {
            missingInPlatformScale.push(value);
        }
    });
    
    if (missingInOther.length > 0) {
        console.log('\nTokens in Platform scale missing in modeless collections:');
        missingInOther.forEach(token => {
            console.log(`  - ${token.key} (${token.uuid})`);
        });
    } else {
        console.log('\nNo tokens found missing in modeless collections.');
    }
    
    if (missingInPlatformScale.length > 0) {
        console.log('\nTokens not in Platform scale collection:');
        missingInPlatformScale.forEach(token => {
            console.log(`  - ${token.key} (${token.uuid})`);
        });
    } else {
        console.log('\nNo tokens found missing in Platform scale collection.');
    }

    // Print matching tokens
    console.log('\nMatching tokens between Platform scale and modeless collections:');
    platformScaleUuids.forEach((platformValue, uuid) => {
        if (otherUuids.has(uuid)) {
            const otherValue = otherUuids.get(uuid);
            console.log(`  - Platform: ${platformValue.key} -> Modeless: ${otherValue.key} (${uuid})`);
        }
    });
}

compareTokenUuids().catch(console.error); 