const fs = require('fs');

// Blocking — waits until the file is fully read
const data = fs.readFileSync('../notes.txt', 'utf8');
console.log("File Data:", data);