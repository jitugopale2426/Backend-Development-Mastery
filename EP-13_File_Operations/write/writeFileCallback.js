const fs = require('fs');

// Overwrites the file — non-blocking
fs.writeFile('../notes.txt', 'This file was written using writeFile (callback).', (err) => {
    console.log("File written (callback)");
});