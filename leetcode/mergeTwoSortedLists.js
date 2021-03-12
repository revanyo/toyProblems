// Merges Two Sorted Lists

const mergeTwoSortedLists = (a, b) => {
  return a.concat(b).sort((a, b) => a - b);
};

a = [5, 10, 15];
b = [3, 8, 9];

console.log(mergeTwoSortedLists(a, b));
