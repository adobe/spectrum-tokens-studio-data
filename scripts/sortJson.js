const fs = require("fs");
const path = require("path");
const { Dirent } = require("fs");
const { writeFile } = require("fs/promises");
const fsExtra = require("fs-extra");

// function innerSort(a, b) {
//   if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
//     return 0;
//   }
//   const comparison = a[key].localeCompare(b[key]);
//   return (
//     order === 'desc' ? comparison * -1 : comparison
//   );
// }

function sortAlphaNumeric(a, b) {
  // convert to strings and force lowercase
  a = typeof a === "string" ? a.toLowerCase() : a.toString();
  b = typeof b === "string" ? b.toLowerCase() : b.toString();

  return a.localeCompare(b, "en-us", { numeric: true });
}

/**
 * Sort JSON file
 * @param {Object} data JSON object
 */
function sortJson(data) {
  return data.sort((a, b) => {
    return sortAlphaNumeric(a[0], b[0]);
  });
}

async function convertFilesInDirectory(rootFolder, directoryPath) {
  const folder = path.join(rootFolder, directoryPath);
  console.log(`Converting files in folder ${folder}...`);

  // get directory content
  const entries = await fsExtra.readdir(folder, { withFileTypes: true });

  // iterate over directory content
  for (let entry of entries) {
    console.log({ entry });
    if (entry.isFile() && entry.name.endsWith(".json")) {
      console.log(`Converting file ${entry.name}...`);
      // let currentFile = 'src/tokens-studio/spectrum-non-colors/spectrum/icon/desktop.json';
      let currentFile = path.join(folder, entry.name);
      let dataFile = JSON.parse(fsExtra.readFileSync(currentFile, "utf-8"));
      let sortedData = sortJson(Object.entries(dataFile)).reduce(
        (r, [k, v]) => ({ ...r, [k]: v }),
        {},
      );
      // write the sorted JSON to a new file;
      await writeFile(currentFile, JSON.stringify(sortedData, null, 2));
      console.log(`Wrote ${currentFile} with key sorted alpha-numerically.`);
    } else if (entry.isDirectory()) {
      console.log(`Found folder ${entry.name}. Go recursive...`);
      await convertFilesInDirectory(folder, entry.name);
    }
  }
}

const main = async () => {
  console.log("Running key sorting alpha-numerically...");

  const workingDir = process.cwd();

  await convertFilesInDirectory(
    workingDir,
    "src/tokens-studio/spectrum2-non-colors/spectrum2/",
  );

  console.log("No Errors");
  console.log("Finish test.");
  process.exit(0);
};

main();
