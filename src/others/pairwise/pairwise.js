const pairwise = (arr, arg) => {
  const tempSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i] + arr[j] === arg
                && !tempSet.has(i)
                && !tempSet.has(j)
      ) {
        tempSet.add(i);
        tempSet.add(j);
      }
    }
  }
  const result = Array.from(tempSet);
  return result.length ? result.reduce((acc, cur) => acc + cur) : 0;
};

export default pairwise;
