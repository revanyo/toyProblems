// Finds the two indexes that add up to a target. Assumes there are two

var twoSum = function (nums, target) {
  let previousValues = [];
  for (let i = 0; i < nums.length; i++) {
    let neededValue = target - nums[i];
    if (previousValues.includes(neededValue)) {
      return [i, nums.indexOf(neededValue)];
    } else {
      previousValues.push(nums[i]);
    }
  }
};

console.log(twoSum([2, 7, 3], 9));
