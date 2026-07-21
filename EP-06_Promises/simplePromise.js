/**
 * THE PIZZA EXAMPLE
 * Demonstrates a basic Promise with resolve/reject and then/catch.
 */

// The `new Promise()` constructor takes a single function (the executor function) as its argument.
// This executor function automatically receives two function arguments from the JavaScript engine:
// 1. resolve -> Called when the operation succeeds.
// 2. reject  -> Called when the operation fails.
const pizzaPromise = new Promise((resolve, reject) => {
    // Simulating a real-world condition
    let pizzaReady = true;

    if (pizzaReady) {
        // Fullfills the promise and sends data to .then()
        resolve("🍕 Pizza delivered!!!!!");
    } else {
        // Rejects the promise and sends an error to .catch()
        reject("❌ Order cancelled.");
    }
});

// Consuming the promise based on its final state
pizzaPromise
    .then((message) => {
        // Runs only if resolve() was called
        console.log(message);
    })
    .catch((error) => {
        // Runs only if reject() was called
        console.log(error);
    });
