/**
 * Deep comparison of two arrays.
 * @param {number[]} a Array 1.
 * @param {number[]} b Array 2.
 */
export function arrayEquals(a, b) {
  return (
    Array.isArray(a)
        && Array.isArray(b)
        && a.length === b.length
        && a.every((val, i) => val === b[i])
  );
}
