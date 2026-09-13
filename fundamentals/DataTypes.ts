let myname: string = "Santosh";
let age: number = 25; // type hinting
let isStudent: boolean = true;
let unknown:any = 100;
let students: string[] = ["Santosh", "Ramesh", "Suresh"];
let cities: Array<string> = ["New York", "Los Angeles", "Chicago"];
let statesAndCities: { [key: number]: string[] } = {
    1: ["Los Angeles", "San Francisco"],
    2: ["Houston", "Dallas"]
    // "one" : ["two", "three"]
};
let myData = [12, true, "Hello there", ["hi", "wassup?"]];
// const myDataTuple: [number, boolean, string, string[]] = [12, true, "Hello there", ["hi", "wassup?"]];

//print
console.log("My name is: " + myname);
console.log("My age is: " + age);
console.log("Am I a student? " + isStudent);
console.log("Unknown value is: " + unknown);
console.log("List of students: " + students.join(", "));
console.log("List of cities: " + cities.join(", "));
console.log("States and their cities: ");
for (let state in statesAndCities) {
    console.log(state + ": " + statesAndCities[state].join(", "));
}
console.log("My data is: " + myData.join(", "));
myData[4] = "NEW VALUE"; // adding new value to the array
console.log("Updated my data is: " + myData.join(", "));
