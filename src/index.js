import bubbleSort from "./sorts/bubble-sort/bubble.js";
import sym from "./find-the-symmetric-difference/sym.js";
import updateInventory from "./inventory-update/inventory.js";
import permAlone from "./no-repeats-please/permutations.js";
import pairwise from "./pairwise/pairwise.js";
import selectionSort from "./sorts/selection-sort/selection.js";
import insertionSort from "./sorts/insertion-sort/insertion.js";
import quickSort from "./sorts/quick-sort/quick.js";
import { arrayEquals } from "./utils.js";

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
console.log('No Repeats Please:', permAlone('abcdefa'));
console.log('Pairwise:', pairwise([7, 9, 11, 13, 15], 20));

const arrayToSort = [1, 4, 2, 8, 123, 43, 32, 63, 123, 43, 2, 55, 1, 234, 92];
const sortedByBubble = bubbleSort(arrayToSort);
const sortedBySelection = selectionSort(arrayToSort);
const sortedByInsertion = insertionSort(arrayToSort);
const sortedByQuick = quickSort(arrayToSort);

console.log('Sorts:');
console.log('\tInsertion:', arrayEquals(sortedByBubble, sortedByInsertion));
console.log('\tSelection:', arrayEquals(sortedByBubble, sortedBySelection));
console.log('\tQuick:', arrayEquals(sortedByBubble, sortedByQuick));