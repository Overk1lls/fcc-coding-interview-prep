export default function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const copy = [...arr];

    let pivot = copy[0];
    const left = [];
    const right = [];

    for (let i = 1; i < copy.length; i++) {
        if (pivot > copy[i]) {
            left.push(copy[i]);
        } else {
            right.push(copy[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
};