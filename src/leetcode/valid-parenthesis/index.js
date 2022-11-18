/**
 * @example '()' => true
 * @example ')(()))' => false
 * @param {string} parens
 * @returns
 */
export function validParentheses(parens) {
  if (parens.startsWith(')') || parens.endsWith('(')) {
    return false;
  }

  for (let i = 0; i < parens.length; i++) {
    const el = parens[i];

    if (el === ')') {
      if (parens[i - 1] !== '(') {
        return false;
      }
      parens = parens.slice(0, i - 1).concat(parens.slice(i + 1));
      i = 0;
    }
  }
  return !parens.length;
}
