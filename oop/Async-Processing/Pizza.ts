// function preparePizza(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         console.log("Preparing your pizza...");

//         setTimeout(() => {
//             console.log("Pizza is ready!");
//             resolve("Pizza is ready!");
//         }, 10000); // Simulate pizza preparation time of 10 seconds
//     });
// }

async function orderPizza() {
    setTimeout(() => {
        console.log("Pizza is ready.. Enjoy your meal!");
    }, 10000); // Simulate pizza preparation time of 10 seconds
}

console.log("I want a chicken pepperoni pizza");

// preparePizza().then((output) => {
//     console.log(output);
// }) // PROMISE CHAINING

// ASYNC AWAIT CHAINING
// let output = orderPizza();
// console.log(output);

console.log("Meanwhile Watching Football...");

// IIFE - Immediately invoked function expression
(async function() {
    let output = await orderPizza();
    console.log(output);
})();