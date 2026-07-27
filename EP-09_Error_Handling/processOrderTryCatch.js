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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 3: Payment verification failed`);
            reject("Payment service unavailable");
        }, 1000);
    });
}

function sendConfirmation(payment) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Step 4: ${payment}`);
            resolve("Confirmation Sent");
        }, 1000);
    });
}

async function processOrder() {
    try {
        const user = await getUser();
        const orders = await getOrders(user);
        const payment = await getPayment(orders);
        const result = await sendConfirmation(payment);

        console.log("Step 5:", result);
    } catch (error) {
        console.log("❌ Order Failed:", error);
    }

    console.log("Process Finished");
}

processOrder();