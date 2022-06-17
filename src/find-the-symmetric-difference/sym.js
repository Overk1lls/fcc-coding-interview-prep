/**
 * Find the symmetric difference exercise.
 * @param  {...number} args Given arrays.
 * @returns {[number]} A unique result array.
 */
const sym = (...args) => {
    let result = args[0].filter(num => !args[1].includes(num))
        .concat(args[1].filter(num => !args[0].includes(num)));

    const set = new Set(result);
    result = Array.from(set);

    for (let i = 2; i < args.length; i++) {
        result = sym(result, args[i]);
    }
    return result;
};

export default sym;