import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});


// Plain Javascript inline functions
let data = ["hi", "hello", "wassup", "howdy"];

// for(let d of data) {
//     console.log(d.toUpperCase);
// }

// data.forEach(greet => console.log(greet.toUpperCase())); // IN Line processing