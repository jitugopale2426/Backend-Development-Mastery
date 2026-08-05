const fs = require('fs/promises');

async function readData() {
    console.log("Start");

    // fs.promises.readFile returns a Promise immediately —
    // it does not pause execution here
    const readPromise = fs.readFile('data.txt', 'utf8');

    // This runs right away, before the file has finished reading
    console.log("Program Continues");

    // await pauses ONLY inside this async function,
    // resuming once the Promise resolves with the file's data
    const data = await readPromise;
    console.log("File Data:", data);
}

readData();