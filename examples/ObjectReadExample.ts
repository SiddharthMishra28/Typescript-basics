let users: { name: string; age: number; isStudent: boolean }[] = [
    { name: "Alice", age: 20, isStudent: true },
    { name: "Bob", age: 25, isStudent: false },
    { name: "Charlie", age: 17, isStudent: true },
];

for (let user of users) {
    if(user.age >= 18) {
        console.log(`${user.name} is eligible to vote.`);
    }else {
        console.log(`${user.name} is not eligible to vote.`);
    }
}
