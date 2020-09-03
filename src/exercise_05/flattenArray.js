export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  return array.flat();
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
}
