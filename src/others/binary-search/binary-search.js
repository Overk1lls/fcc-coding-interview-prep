/**
 * Binary searches through the collection (array),
 * and returns a path which was used through the algorithm.
 * @param {number[]} searchList
 * @param {number} value
 */
export default function binarySearch(searchList, value, l = 0, r = searchList.length - 1) {
  let arrayPath = [];

  const valueNotFound = 'Value Not Found';
  if (l > r) {
    return valueNotFound;
  }
  const pivot = Math.floor((l + r) / 2);
  arrayPath.push(searchList[pivot]);

  if (searchList[pivot] === value) {
    return arrayPath;
  }
  if (searchList[pivot] > value) {
    arrayPath = arrayPath.concat(binarySearch(searchList, value, l, pivot - 1));
  } else if (searchList[pivot] < value) {
    arrayPath = arrayPath.concat(binarySearch(searchList, value, pivot + 1));
  }
  return arrayPath.includes(valueNotFound) ? valueNotFound : arrayPath;
}
