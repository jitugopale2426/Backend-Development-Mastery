const fs = require('fs');

// Deleting a file that doesn't exist throws an error —
// checking first avoids crashing the program
if (fs.existsSync('../notes.txt')) {
    fs.unlinkSync('../notes.txt');
    console.log("File existed — deleted successfully");
} else {
    console.log("File doesn't exist — nothing to delete");
}