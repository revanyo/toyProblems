let array = [];

for (let i = 0; i < 100; i++) {
  let num = Math.floor(Math.random() * 1000);
  array.push(num);
}

const selectSort = (array) => {
  let result = [];
  const inner = (array) => {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }
    result.push(smallest);
    array.splice(array.indexOf(smallest), 1);
    if (array.length !== 0) {
      inner(array);
    }
  };
  inner(array);
  return result;
};

console.log(selectSort(array));
