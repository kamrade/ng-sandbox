// Проверяет наличие элемента value в массиве arr.
// TODO: Можно сделать через Array.prototype.
module.exports = function arrayHasThisValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};
