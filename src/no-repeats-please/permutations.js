/**
 * Generate a distinct number of permutations of a string.
 * @param {string} str The string.
 * @returns The number of distinct permutations.
 */
const permAlone = (str) => {
  let toArray = str;
  const permutations = [];
  const seqRegExp = /(.)\1+/;

  if (!Array.isArray(str)) {
    toArray = str.split('');
  }

  const swapItems = (index1, index2) => {
    const temp = toArray[index1];
    toArray[index1] = toArray[index2];
    toArray[index2] = temp;
  };

  const generatePerm = (size) => {
    if (size === 1) {
      permutations.push(toArray.join(''));
    } else {
      for (let i = 0; i < size; i++) {
        generatePerm(size - 1);
        swapItems(size % 2 ? 0 : i, size - 1);
      }
    }
  };
  generatePerm(str.length);

  const filterItems = (array) => array.filter((item) => !seqRegExp.test(item));

  return filterItems(permutations).length;
};

export default permAlone;
