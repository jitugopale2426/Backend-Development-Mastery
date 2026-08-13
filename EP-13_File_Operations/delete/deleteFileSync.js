const fs = require('fs');

// Deletes the file immediately — blocking
fs.unlinkSync('../notes.txt');
console.log("File deleted (sync)");