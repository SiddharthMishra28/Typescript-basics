class MyExampleClass {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

class Laptop {
    brand: string;
    ramCapacity: number;
    hardDriveCapacity: number;

    constructor(brand: string, ramCapacity: number, hardDriveCapacity: number) {
        this.brand = brand;
        this.ramCapacity = ramCapacity;
        this.hardDriveCapacity = hardDriveCapacity;
    }
}

let myClass = new MyExampleClass("John", 30);
console.log(myClass);


let lenovoLaptop = new Laptop("Lenovo", 16, 512);
console.log(lenovoLaptop);
console.log("Laptop harddisk capacity is : "+lenovoLaptop.hardDriveCapacity)