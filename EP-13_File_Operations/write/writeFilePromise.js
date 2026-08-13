const fs = require('fs/promises');

async function writeNotes() {
    // Overwrites the file — non-blocking, modern syntax
    await fs.writeFile('../notes.txt', 'This file was written using fs.promises.');
    console.log("File written (promise)");
}

writeNotes();