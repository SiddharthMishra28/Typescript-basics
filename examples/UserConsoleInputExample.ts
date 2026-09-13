import * as readline from 'readline';

const users: { name: string; age: number; isStudent: boolean }[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showMenu() {
    console.log("User Management System");
    let isRunning = true;
    let choice:String = "";
    while (isRunning) {
        console.log("1. Add User");
        console.log("2. List Users");
        console.log("3. Exit");
        choice = await new Promise((resolve) => {
            rl.question("Enter your choice: ", (input) => {
                resolve(input);
            });
        });
        switch (choice) {
            case "1":
                // await addUser();
                console.log("User added successfully.");
                break;
            case "2":
                console.log("List of users:");
                break;
            case "3":
                isRunning = false;
                break;
        }
    }
}

showMenu();