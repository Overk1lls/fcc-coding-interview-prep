/**
 * @example 4895 => [55, 89, true]
 * @example 800 => [34, 55, false]
 * @example 714 => [21, 34, true]
 * @param {number} prod
 */
export function productFib(prod) {
  let n = 0;
  let n1 = 1;

  while (n * n1 < prod) {
    n1 += n;
    n = n1 - n;
  }
  return [n, n1, n * n1 === prod];
}
