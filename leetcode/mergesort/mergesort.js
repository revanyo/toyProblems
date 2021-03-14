let array = [];

for (let i = 0; i < 100000; i++) {
  let temp = Math.floor(Math.random() * 100);
  array.push(temp);
}

let left = [1, 3, 6, 9];
let right = [1, 2, 5, 7, 10];

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

const mergeSort = (array) => {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) return array;

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

let result = mergeSort(array);
console.log(result, "result");
