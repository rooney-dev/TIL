let swap = function (arr, idx_1, idx_2) {
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp;
};

let accending = function (x, y) {
  return x > y;
};

let decending = function (x, y) {
  return x < y;
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

function benchmark(arr, callback, order) {
  let start = Date.now();
  callback(arr, order);
  return Date.now() - start;
}
let init_arr = [];
let max = 10000;
for (let i = 0; i < max; i++) {
  init_arr.push(Math.round(Math.random() * max));
}
console.log(benchmark(init_arr, selectionSort, accending));
// let init_arr = [6, 5, 1, 4, 3];
// let arr = [...init_arr];
