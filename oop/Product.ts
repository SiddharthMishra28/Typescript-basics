export class Product {

    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    calculatePrice(): number {
        console.log("Calculated price is $"+this.name.length);
        return this.name.length;
    }
}

// let mobile = new Product(1, "Samsung Galaxy", "Great Mobile Phone");

// console.log(mobile.description);
// console.log(mobile);

