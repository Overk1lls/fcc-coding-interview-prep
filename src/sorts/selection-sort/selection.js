const selectionSort = (arr) => {
  const result = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (result[j] < result[minIdx]) {
        minIdx = j;
      }
    }
    const temp = result[minIdx];
    result[minIdx] = result[i];
    result[i] = temp;
  }
  return result;
};

export default selectionSort;
