const path = require('path');

// __dirname — the folder this file lives in
console.log("Current directory:", __dirname);

// __filename — the full path to this file
console.log("Current file:", __filename);

// path.join() — safely combines folder/file names, handles slashes correctly on any OS
const notesPath = path.join(__dirname, '..', 'notes.txt');
console.log("Joined path:", notesPath);

// path.resolve() — builds an absolute path from the given segments
const resolvedPath = path.resolve('notes.txt');
console.log("Resolved path:", resolvedPath);

// path.basename() and path.extname() — useful bits of a path
console.log("File name only:", path.basename(notesPath));
console.log("File extension:", path.extname(notesPath));