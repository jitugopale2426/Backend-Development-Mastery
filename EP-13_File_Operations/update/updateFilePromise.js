const fs = require('fs/promises');

async function updateNotes() {
    // Appends to the file — non-blocking, modern syntax
    await fs.appendFile('../notes.txt', '\nUpdated using fs.promises.');
    console.log("File updated (promise)");
}

updateNotes();