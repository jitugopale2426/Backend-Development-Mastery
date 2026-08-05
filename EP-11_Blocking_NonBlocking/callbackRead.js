const fs = require('fs');

console.log("Start");

// fs.readFile does NOT block — it starts reading in the background
// and runs this callback later, once the file is ready
fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log("File Data:", data);
});

// This runs immediately, WITHOUT waiting for the file read to finish
console.log("Program Continues");