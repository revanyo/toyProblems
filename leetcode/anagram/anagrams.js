// Checks words are anagrams ie silent and listen are anagrams

const anagrams = (s1, s2) => {
  let sorted1 = s1.split("").sort().join("");
  let sorted2 = s2.split("").sort().join("");

  if (sorted1 === sorted2) {
    return true;
  } else {
    return false;
  }
};
