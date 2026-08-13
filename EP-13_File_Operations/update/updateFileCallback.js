const fs = require('fs');

// Appends to the file — non-blocking
fs.appendFile('../notes.txt', '\nUpdated using appendFile (callback).', (err) => {
    console.log("File updated (callback)");
});