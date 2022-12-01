/**
 * @param {number[]} blockResults
 */
function findMinBlockIndex(blockResults) {
  let result = 0;

  blockResults.reduce((prev, cur, i) => {
    if (prev < cur) {
      result = i;
      return cur;
    }
    result = i === 0 ? 0 : i - 1;
    return prev;
  });

  return result;
}

/**
 * @param {{ [key: string]: boolean }[]} blocks
 * @param {string[]} reqs
 * @return {number} the number of min block
 */
export function findMinBlock(blocks, reqs) {
  /**
   * @type {number[]}
   */
  const blockResults = [];

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < reqs.length; j++) {
      if (!blocks[i][reqs[j]]) {
        if (i !== 0 && blocks[i - 1][reqs[j]]) {
          blockResults[i] = blockResults[i] ? blockResults[i] + 1 : 1;
        } else if (i !== blocks.length - 1 && blocks[i + 1][reqs[j]]) {
          blockResults[i] = blockResults[i] ? blockResults[i] + 1 : 1;
        }
      } else {
        blockResults[i] = blockResults[i] ? blockResults[i] + 1 : 1;
      }
    }
  }

  return findMinBlockIndex(blockResults);
}
