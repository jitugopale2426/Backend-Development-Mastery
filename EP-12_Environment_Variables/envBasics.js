// envBasics.js
// No installation needed — process is built directly into Node.js

console.log("Node version:", process.version);
console.log("Platform:", process.platform);

// process.env holds environment variables — right now, PORT hasn't been set
console.log("Current PORT env value:", process.env.PORT);

// process.argv — arguments passed when running this file from the terminal
console.log("Arguments:", process.argv);