/**
 * Rotate a matrix to a specified direction.
 * @example rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'clockwise')
 * would return [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]
 * @param {number[][]} matrix
 * @param {"clockwise" | "counter-clockwise"} direction
 */
export function rotate(matrix, direction) {
  /**
   * @type {number[][]}
   */
  const result = new Array(matrix[0].length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(matrix.length);
  }

  if (direction === 'clockwise') {
    for (let i = matrix.length - 1; i >= 0; i--) {
      const row = matrix[i];

      row.forEach((num, j) => {
        result[j][matrix.length - 1 - i] = num;
      });
    }
  } else {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];

      row.forEach((num, j) => {
        result[row.length - 1 - j][i] = num;
      });
    }
  }
  return result;
}
