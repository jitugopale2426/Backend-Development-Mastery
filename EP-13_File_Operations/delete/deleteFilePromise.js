const fs = require('fs/promises');

async function deleteNotes() {
    // Deletes the file — non-blocking, modern syntax
    await fs.unlink('../notes.txt');
    console.log("File deleted (promise)");
}

deleteNotes();