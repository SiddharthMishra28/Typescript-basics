import { SimCard } from "./SimCard";

export interface DigitalDevice {
    brand: string;
    deviceType: string;
    simCard: SimCard;
}