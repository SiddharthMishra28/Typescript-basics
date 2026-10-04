
export class Person {

    id: number;
    name: string;
    age: number;
    height: number;

    constructor(id: number, name: string, age: number, height: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
    }

    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
    
}