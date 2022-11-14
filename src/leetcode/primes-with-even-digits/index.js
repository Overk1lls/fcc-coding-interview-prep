/**
 * @param {number} num
 */
function checkEvensNum(num) {
  return (num.toString().match(/[02468]/g) || []).length;
}

/**
 * @param {number} num
 */
function isPrime(num) {
  if ((num % 2 === 0 && num !== 2) || num <= 1) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(num));

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
}

/**
 * 1000 <= n <= 5000000
 * @example f(1000) => 887 (8, 8)
 * @example f(1210) => 1201 (2, 0)
 * @example f(10000) => 8887
 * @param {number} n
 */
export function f(n) {
  const upperLimit = n % 2 === 0 ? n - 1 : n - 2;
  const compareLength = upperLimit.toString().length - 1;
  const lowerLimit = upperLimit % (10 ** compareLength);
  let digitNums;
  let result;

  for (let i = upperLimit; i > lowerLimit; i -= 2) {
    if (isPrime(i)) {
      const evensNum = checkEvensNum(i);
      if (!result) {
        digitNums = evensNum;
        result = i;
      } else if (evensNum > digitNums) {
        digitNums = evensNum;
        result = i;
      }
    }
  }
  return result;
}
