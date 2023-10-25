const fs = require("fs");
const path = require("path");

let imagesArray = [];
const sourceFolder = "./office_hours_images";
const targetFolder = "./active_office_hours_image";

// Read the directory
fs.readdir(sourceFolder, (err, files) => {
  if (err) {
    console.log(`Error reading:`, err);
    return;
  }

  imagesArray = files;

  // Select a random image from the imagesArray
  const randomImage =
    imagesArray[Math.floor(Math.random() * imagesArray.length)];

  // Define source and destination paths
  const sourcePath = path.join(sourceFolder, randomImage);
  const targetPath = path.join(
    targetFolder,
    "active" + path.extname(randomImage)
  );

  // Read the random image
  fs.readFile(sourcePath, (err, data) => {
    if (err) {
      console.log(`Error reading:`, err);
      return;
    }

    // Write the image to the target folder with the new name
    fs.writeFile(targetPath, data, (err) => {
      if (err) {
        console.log(`Error writing:`, err);
        return;
      }

      console.log(`Copied ${randomImage} to ${targetPath}`);
    });
  });
});
