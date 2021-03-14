let array = [];

for (let i = 0; i < 10000; i++) {
  let num = Math.floor(Math.random() * 1000);
  array.push(num);
}

const bubbleSort = (array) => {
  const inner = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        count++;
        let tempOne = array[i];
        let tempTwo = array[i + 1];
        array[i] = tempTwo;
        array[i + 1] = tempOne;
      }
    }
    if (count > 0) {
      inner(array);
    }
  };
  inner(array);
  return array;
};

console.log(bubbleSort(array));
