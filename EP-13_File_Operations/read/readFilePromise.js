const fs = require('fs/promises');

async function readNotes() {
    // Non-blocking, modern syntax
    const data = await fs.readFile('../notes.txt', 'utf8');
    console.log("File Data:", data);
}

readNotes();