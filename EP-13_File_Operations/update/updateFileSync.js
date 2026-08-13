const fs = require('fs');

// Adds new content to the END of the file, without deleting what's there — blocking
fs.appendFileSync('../notes.txt', '\nUpdated using appendFileSync.');
console.log("File updated (sync)");