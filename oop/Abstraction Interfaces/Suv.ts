import { Car } from "./Car";
import { Engine } from "./Engine";

export class Suv implements Car {

    isAllWheelDrive: boolean;
    make: string;
    model: string;
    year: number;
    engine: Engine;

    constructor(isAllWheelDrive: boolean, make: string, model: string, year: number, engine: Engine) {
        this.isAllWheelDrive = isAllWheelDrive;
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;   
    }

    drive() {
       console.log("Driving an SUV with Engine:", this.engine, " and gearbox type ", this.engine.gearBox, "All-wheel drive:", this.isAllWheelDrive);
    }


}

export class FiatEngine implements Engine {

    gearBox: string;

    constructor(gearBox: string) {
        this.gearBox = gearBox;
    }
}

let sumo = new Suv(true, "Tata", "Sumo 2020", 2020, new FiatEngine("Automatic"));
sumo.drive();