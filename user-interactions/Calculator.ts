import * as readline from 'readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ASYNC MISTAKE!!
// console.log('============================ Calculator ============================');
// r1.question("Enter first number: ", (firstNum) => {
//     const firstNumber = firstNum;

//     r1.question("Enter Second Number :", (secondNum) => {
//         const secondNumber = secondNum;

//         const sum = firstNumber + secondNumber;
//         console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
//         r1.close();
//     });
//     r1.close();
// });

console.log('============================ Calculator ============================');
r1.question("Enter first number: ", (firstNum) => {
    const firstNumber = Number(firstNum);

    r1.question("Enter second number: ", (secondNum) => {
        const secondNumber = Number(secondNum);

        r1.question("Choose Operation (+, -, *, /): ", (operation) => {
            switch(operation) {
                case "+":
                    console.log(`The sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
                    break;
                case "-":
                    console.log(`The difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
                    break;
                case "*":
                    console.log(`The product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
                    break;
                case "/":
                    console.log(`The quotient of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`);
                    break;
                default:
                    console.log("Invalid operation");
                    break;
            }
            r1.close();
        });
    });
});
