const fs = require('fs');

console.log("Start");

// fs.readFileSync blocks the program here —
// nothing below this line runs until the file is fully read
const data = fs.readFileSync('data.txt', 'utf8');
console.log("File Data:", data);

// This only runs AFTER the file has finished reading
console.log("Program Continues");