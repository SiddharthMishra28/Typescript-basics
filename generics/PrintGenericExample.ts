function printGeneric<T>(value: T) {
    console.log(value);
}

function printGenericArray<T>(values: T[]) {
    values.forEach(value => console.log(value));
}

export class Person  {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export class MobilePhone {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }
}

let santosh = new Person("Santosh", 30);    
printGeneric(santosh);

let iphone = new MobilePhone("Apple", "iPhone 13");
printGeneric(iphone);

let sid = new Person("Sid", 25);
printGenericArray([santosh, sid]);