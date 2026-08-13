const fs = require('fs');

// Deletes the file — non-blocking
fs.unlink('../notes.txt', (err) => {
    console.log("File deleted (callback)");
});