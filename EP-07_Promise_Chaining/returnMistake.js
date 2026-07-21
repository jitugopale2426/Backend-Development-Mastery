function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: User found");
            resolve({ id: 1, name: "Jitesh" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 2: Orders found for ${user.name}`);
            resolve(["Order #101", "Order #102"]);
        }, 1000);
    });
}

// ❌ BROKEN VERSION
getUser()
    .then((user) => 
         getOrders(user)   // forgot to "return" here!
    )
    .then((orders) => {
        console.log("Step 3:", orders);   // orders will be undefined
    });

// ✅ FIXED VERSION
// getUser()
//     .then((user) => {
//         return getOrders(user);   // returning the Promise fixes the chain
//     })
//     .then((orders) => {
//         console.log("Step 3:", orders);   // now logs the actual array
//     });