/**
 * @param {boolean[][]} lists 
 * @returns {number}
 */
export function findMaxConsecutiveNum(lists) {
  const percentagesList = findPercentagesList(lists);
  let results = [];
  let resetNum = 1;

  for (let i = 1; i < percentagesList.length; i++) {
    if (percentagesList[i] < percentagesList[i - 1]) {
      resetNum++;
    } else {
      results[i - 0] = resetNum;
      resetNum = 1;
    }
  }
  return results.reduce((prev, cur) => prev > cur ? prev : cur);
}

/**
 * @param {boolean[][]} lists 
 */
function findPercentagesList(lists) {
  const percentages = [];

  lists.forEach((list, i) => {
    let truthCount = 0;
    let falseCount = 0;

    list.forEach((item) => item ? truthCount++ : falseCount++);

    percentages[i] = Math.round(100 / list.length) * truthCount;
  });

  return percentages;
}