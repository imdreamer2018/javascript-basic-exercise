export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  const result = [];
  if (start > end) {
    for (let i = start; i > end; i -= 1) {
      result.push(i);
    }
  } else if (start < end) {
    for (let i = start; i < end; i += 1) {
      result.push(i);
    }
  }
  return result;
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  if (numbers === undefined || numbers === null || numbers.length === 0) return 0;
  return numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
}
