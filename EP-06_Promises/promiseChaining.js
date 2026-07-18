/**
 * THE USER → ORDERS → PAYMENT SEQUENCE
 * A realistic teaser showing how data flows through a Promise chain.
 */

// Step 1: Simulates fetching user data from a database
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: User found");
            resolve({ id: 1, name: "Jitesh" }); // Passes a user object down the chain
        }, 1000);
    });
}

// Step 2: Uses the data from Step 1 to fetch that user's specific orders
function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 2: Orders found for ${user.name}`);
            resolve(["Order #101", "Order #102"]); // Passes an array of orders down the chain
        }, 1000);
    });
}

// Step 3: Uses the data from Step 2 to process the payment for those orders
function getPayment(orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 3: Payment verified for ${orders.length} orders`);
            resolve("Payment Successful"); // Passes the final success message down the chain
        }, 1000);
    });
}

// EXECUTION: Data Pipeline
// Notice how the resolved value of each Promise becomes the input parameter for the next function.
getUser()
    .then((user) => getOrders(user))       // Receives 'user' object -> returns getOrders promise
    .then((orders) => getPayment(orders))   // Receives 'orders' array -> returns getPayment promise
    .then((result) => {
        // Receives the final string "Payment Successful"
        console.log("Step 4:", result);
    })
    .catch((err) => {
        // Acts as a safety net for the entire checkout pipeline
        console.log("Something went wrong:", err);
    });
