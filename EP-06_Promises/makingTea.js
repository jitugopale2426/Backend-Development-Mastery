/**
 * MAKING TEA — SOLVING CALLBACK HELL
 * Demonstrates Promise Chaining to run asynchronous tasks in a clean, readable sequence.
 */

// Helper function that returns a Promise. 
// It delays execution using setTimeout and resolves automatically when finished.
function step(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Notifies the next .then() block that this step is finished
        }, delay);
    });
}

// Promise Chaining: Each step starts only after the previous step's Promise resolves.
// Instead of nesting (Callback Hell), we chain them vertically using .then().
step("Step 1: Boil water", 1000)
    .then(() => step("Step 2: Add tea leaves", 1000)) // Returns a new promise for Step 2
    .then(() => step("Step 3: Add milk", 1000))       // Returns a new promise for Step 3
    .then(() => step("Step 4: Add sugar", 1000))      // Returns a new promise for Step 4
    .then(() => step("Step 5: Serve tea", 1000))      // Returns a new promise for Step 5
    .catch((err) => {
        // Global error handler: Catches an error if ANY of the steps fail above
        console.log("Something went wrong:", err);
    });
