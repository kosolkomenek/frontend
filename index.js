function findTwoSmallestNumber(array) {
  let first = array[0];
  let second = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < first) {
      second = first;
      first = array[i];
    } else if (first < array[i] && array[i] < second) {
      second = array[i];
    }
  }
  return { first, second };
}
const result = findTwoSmallestNumber([13, 1, 15, 2, 99, 87, 101, 555, -1, 11]);
console.log(result);
