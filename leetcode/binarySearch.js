var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(start <= end) {
        let middle = Math.floor((start + end)/2)
        if(nums[middle] === target) {
            return middle
        } else if (target < nums[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
     return -1
 };

 let result = search([-1,0,3,5,9,12],2)
 console.log(result);