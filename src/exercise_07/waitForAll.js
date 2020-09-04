export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  promises.forEach((promise) => {
    if (!(promise instanceof Promise)) {
      throw Error('Not all elements are promises.');
    }
  });
  return new Promise(((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < promises.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      promises[i].then(() => {
        counter += 1;
        if (counter === promises.length) {
          resolve();
        }
      }, () => {
        'It should not be a success promise';
        // eslint-disable-next-line no-loop-func
      }).finally(() => {
        if (i === promises.length - 1 && counter !== promises.length) {
          reject();
        }
      });
    }
  }));
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
}
