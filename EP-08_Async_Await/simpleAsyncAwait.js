function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: User found");
            resolve({ id: 1, name: "Jitesh" });
        }, 1000);
    });
}

// Using async/await instead of .then()
async function showUser() {
    const user = await getUser();   // pauses here until the Promise resolves
    console.log(user) // user json
    console.log("Got user:", user.name);
}

showUser();