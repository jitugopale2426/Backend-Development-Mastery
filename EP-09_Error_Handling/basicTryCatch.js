console.log("Program Started");

try {
    const user = JSON.parse("{name:'Jitesh'}"); // Invalid JSON
    console.log(user);
} catch (error) {
    console.log("❌ Invalid JSON format");
}

console.log("Program Continues");