function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server is down");
        }, 2000);
    });
}

async function fetchUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log("❌ Error:", error);
    }

    console.log("Program Continues");
}

fetchUser();