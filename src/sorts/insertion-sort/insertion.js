/**
 * Sorts an array via insertion method. It doesn't mutate the original array,
 * but rather creates a new sorted one.
 * @param {number[]} array
 * @returns Sorted array.
 */
export default function insertionSort(array) {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    const key = copy[i];
    let j = i - 1;

    while (j >= 0 && copy[j] > key) {
      copy[j + 1] = copy[j];
      j -= 1;
    }
    copy[j + 1] = key;
  }
  return copy;
}
