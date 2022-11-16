/**
 * @example [1, 1, 1].sameStructureAs([2, 2, 2]) => true
 * @example [1, [1, 1]].sameStructureAs([[2, 2], 2]) => false
 * @param {unknown[]} array
 * @param {unknown[]} other
 */
export function sameStructureAs(array, other) {
  for (let i = 0; i < other.length; i++) {
    if (Array.isArray(other[i])) {
      if (
        array[i].length !== other[i].length
        || !array[i].every((v, j) => typeof v === typeof other[i][j])
      ) {
        return false;
      }
      array[i].sameStructureAs(other[i]);
    }
  }
  return array.length === other.length;
}
