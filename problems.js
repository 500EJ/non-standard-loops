function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  return arr.filter((el, i) => i % 2 === 1);
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  return arr.filter((el, i) => i % 2 === 1).reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.log2(i) % 1 === 0) indices.push(arr[i]);
  }
  return indices;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if ((Math.log(i) / Math.log(n)).toFixed(2) % 1 === 0) indices.push(arr[i]);
  }
  return indices;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  if (arr.length === 1) return arr;
  return arr.slice(0, Math.floor(arr.length / 2));
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  return arr.slice(Math.ceil(arr.length / 2));
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
