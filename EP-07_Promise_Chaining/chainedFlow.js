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

getUser()
    .then((user) => {
        return getOrders(user);
    })
    .then((orders) => {
        return getPayment(orders);
    })
    .then((payment) => {
        return sendConfirmation(payment);
    })
    .then((result) => {
        console.log("Step 5:", result);
    })
    .catch((err) => console.log("Something went wrong:", err));