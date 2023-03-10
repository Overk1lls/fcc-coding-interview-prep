/**
 * Updates the example of a 2D inventory.
 * @param {Record<number, string>[][]} inv Current inventory.
 * @param {Record<number, string>[][]} newItems Inventory with items to update.
 * @returns An updated inventory, sorted in alphabetical order.
 */
const updateInventory = (inv, newItems) => {
  const result = [...inv];

  newItems.forEach((newItem) => {
    const isItem = result.find((item) => item[1] === newItem[1]);
    if (isItem) {
      result[result.indexOf(isItem)][0] += newItem[0];
    } else {
      result.push(newItem);
    }
  });
  return result.sort((a, b) => (a[1] > b[1] ? 1 : -1));
};

export default updateInventory;
