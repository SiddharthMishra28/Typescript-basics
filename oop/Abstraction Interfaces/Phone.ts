import { DigitalDevice } from "./DigitalDevice";
import { SimCard } from "./SimCard";

export class Phone implements DigitalDevice {
    brand: string;
    deviceType: string;
    simCard: SimCard;

    constructor(brand: string, deviceType: string, simCard: SimCard) {
        this.brand = brand;
        this.deviceType = deviceType;
        this.simCard = simCard;
    }
}

let airtelSimCard: SimCard = {
    carrier: "Airtel",
    phoneNumber: "123-456-7890",
    activate: () => {
        console.log("Airtel SIM card activated.");
    },
    deactivate: () => {
        console.log("Airtel SIM card deactivated.");
    }
};

let galaxyPhone = new Phone("Samsung", "Galaxy S21", airtelSimCard);

console.log(galaxyPhone.simCard.deactivate());