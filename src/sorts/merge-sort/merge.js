function mergeBack(arr1, arr2) {
  const sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
}

/**
 * Sorts an array via merge method. It doesn't mutate the original array,
 * but rather creates a new sorted one.
 * @param {number[]} arr
 * @returns Sorted array.
 */
export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const copy = [...arr];

  const mid = Math.floor(copy.length / 2);
  const left = mergeSort(copy.slice(0, mid));
  const right = mergeSort(copy.slice(mid));

  return mergeBack(left, right);
}
