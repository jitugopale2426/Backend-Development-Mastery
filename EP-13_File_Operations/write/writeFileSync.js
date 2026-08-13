const fs = require('fs');

// Overwrites the file completely with new content — blocking
fs.writeFileSync('../notes.txt', 'This file was written using writeFileSync.');
console.log("File written (sync)");