import { Person } from './Person.ts';

export class Student extends Person { // STUDENT IS-A PERSON
    rollNumber: number;
    Specialization: string;

    constructor(id: number, name: string, age: number, height: number, rollNumber: number, Specialization: string) {
        super(id, name, age, height); // CALLING THE PARENT CLASS CONSTRUCTOR
        this.rollNumber = rollNumber;
        this.Specialization = Specialization;
    }

    //OVERRRIDE PARENT CLASS METHOD
    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. My roll number is ${this.rollNumber} and I specialize in ${this.Specialization}.`;
    }

    identify(): string {
        return `I am a student with id number ${this.id} and I specialize in ${this.Specialization}.`;
    }

    // identify(isStudent: boolean): string {
    //     return `I am a student with id number ${this.id} roll number ${this.rollNumber} and I specialize in ${this.Specialization} .`;
    // }
}

let santosh = new Student(1, "Santosh", 20, 5.9, 101, "Computer Science");
console.log(santosh.introduce());
console.log(santosh);

console.log(santosh.identify());