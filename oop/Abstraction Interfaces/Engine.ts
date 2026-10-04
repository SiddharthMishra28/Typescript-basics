import { Gearbox } from "./Gearbox";

export interface Engine {
    make: string;
    model: string;
    horsepower: number;
    gearBox: Gearbox;
}