function preparePizza(): void {
    setTimeout(() => {
        console.log("Pizza is ready!");
    }, 10000); // Simulate pizza preparation time of 10 seconds
}

console.log("I want a pizza..Margherita");
preparePizza();

console.log("Watching Instagram meanwhile...");

// PROMISE - Is an intermediate concept for handling asynchronous operations in a more manageable way than callbacks.
// STATUSES
// 1. Pending - The asynchronous operation is still in progress.
// 2. Fulfilled - The asynchronous operation has completed successfully.
// 3. Rejected - The asynchronous operation has failed.