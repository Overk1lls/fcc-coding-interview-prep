/**
 * @example [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19]
 * would return '-10--8,-6,-3-1,3-5,7-11,14,15,17-19'
 * @param {number[]} list
 */
export function solution(list) {
  /**
   * @type {number[]}
   */
  let temp = [];
  let result = '';

  list.forEach((v, i) => {
    temp.push(v);

    if (list[i + 1] - v !== 1) {
      if (result) {
        result += ',';
      }
      if (temp.length >= 3) {
        result += `${temp.shift()}-${temp.pop()}`;
      } else {
        result += temp.join(',');
      }
      temp = [];
    }
  });
  return result;
}
