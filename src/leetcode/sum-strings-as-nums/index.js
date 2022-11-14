/**
 * The usage of BigInt is not allowed.
 * @example ('1', '2') => '3'
 * @param {string} a
 * @param {string} b
 */
export function sumStrings(a, b) {
  const aLength = a.length;
  const bLength = b.length;
  const maxLength = Math.max(aLength, bLength);
  let carry = 0;
  let sum = '';

  for (let i = 1; i <= maxLength; i++) {
    const parseA = +a.charAt(aLength - i);
    const parseB = +b.charAt(bLength - i);
    let t = carry + parseA + parseB;

    carry = t / 10 | 0;
    t %= 10;

    sum = i === maxLength && carry
      ? carry * 10 + t + sum
      : t + sum;
  }
  return sum.replace(/^0+/, '');
}
