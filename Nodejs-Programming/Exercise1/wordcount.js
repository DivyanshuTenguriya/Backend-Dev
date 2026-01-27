const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const words = data.trim().split(/\s+/);
  const count = words.length;

  const result = `Total number of words: ${count}`;

  fs.writeFile(outputPath, result, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt");
  });
});
