// Example 2 — Rewriting the previous episode's 4-step .then() chain (solution)

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

function getPayment(orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 3: Payment verified for ${orders.length} orders`);
            resolve("Payment Successful");
        }, 1000);
    });
}

function sendConfirmation(payment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 4: ${payment} — confirmation sent`);
            resolve("Confirmation Sent");
        }, 1000);
    });
}

// no .then() chain, no risk of forgetting a "return"
async function processOrder() {
    const user = await getUser();
    const orders = await getOrders(user);
    const payment = await getPayment(orders);
    const result = await sendConfirmation(payment);
    console.log("Step 5:", result);
}

processOrder();
