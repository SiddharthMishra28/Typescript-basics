// For Loop similar to java - let instead of int
for(let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

let students: { name: string; age: number; isStudent: boolean }[] = [
    { name: "Alice", age: 20, isStudent: true },
    { name: "Bob", age: 25, isStudent: false },
    { name: "Charlie", age: 17, isStudent: true },
    { name: "David", age: 30, isStudent: false },
    { name: "Eve", age: 22, isStudent: true },
    { name: "Frank", age: 19, isStudent: true },
];

let totalAge: number = 0;
let totalStudetns: number = students.length;
// For of loop to iterate over the array of objects
for(const s of students) {
    // totalAge = totalAge + s.age;
    totalAge += s.age;
}

console.log("Average age of students is: " + (totalAge / totalStudetns));

students.forEach((s) => {
    console.log("Number of characters in name of " + s.name + " is: " + s.name.length);
});