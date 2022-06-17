const selectionSort = arr => {
    const result = [...arr];

    for (let i = 0; i < arr.length - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (result[j] < result[min_idx]) {
                min_idx = j;
            }
        }
        const temp = result[min_idx];
        result[min_idx] = result[i];
        result[i] = temp;
    }
    return result;
};

export default selectionSort;