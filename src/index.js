import sym from "./find-the-symmetric-difference/sym.js";
import updateInventory from "./inventory-update/inventory.js";

console.log('Find the Symmetric Difference:', sym([1, 2, 3], [5, 2, 1, 4]));

const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log('Inventory Update:', updateInventory(curInv, newInv));