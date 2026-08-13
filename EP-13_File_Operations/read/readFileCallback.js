const fs = require('fs');

// Non-blocking — reads in the background, runs the callback when done
fs.readFile('../notes.txt', 'utf8', (err, data) => {
    console.log("File Data:", data);
});