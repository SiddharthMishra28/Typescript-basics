import { ElectronicProduct } from './ElectronicProduct.ts';

const iphone = new ElectronicProduct(2, "iPhone 14", "Great Mobile Phone");

console.log(iphone);
console.log(iphone.calculatePrice());