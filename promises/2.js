function addAsync(x, y) {
    return new Promise(
      (resolve, reject) => { // (A)
        if (x === undefined || y === undefined) {
          reject(new Error('Must provide two parameters'));
        } else {
          return resolve(x + y);
        }
      });
}

console.log(addAsync(1))