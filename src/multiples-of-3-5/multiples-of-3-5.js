/**
 *
 * @param {number} number
 */
export default function solution(number) {
  if (number < 3) return 0;
  if (number === 3) return 3;

  let result = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += result;
    }
  }
  return result;
}
