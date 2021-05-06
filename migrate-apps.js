const fs = require("fs");
const path = require("path");

const inputDirectory = "./content/apps";
const outputDirectory = "./content/converted-apps";
console.log("converting apps....");

function convertApps() {
  const fileNames = fs.readdirSync(inputDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".json"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(inputDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const outputPath = path.join(outputDirectory, fileName);

      const app = JSON.parse(fileContents);

      /// customize the app

      fs.writeFile(
        outputPath,
        JSON.stringify({
          ...app,
        }),
        (error) => {
          if (error) throw error;
        }
      );
    });
}

fs.mkdir(outputDirectory, { recursive: true }, (err) => {
  if (err) throw err;
  convertApps();
  console.log("Completed");
});
