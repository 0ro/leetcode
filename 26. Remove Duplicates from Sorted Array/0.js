/**
 * @param {number[]} nums
 * @return {number}

[0,1,2,3,_,_,_,_,_,4] 


[0,1,_,_,_,2,2,3,3,4]
   l       i 
 */
var removeDuplicates = function (nums) {
  let ans = 1;
  let l = 0;
  let i = 1;
  while (i < nums.length) {
    if (nums[i] == nums[l]) {
      nums[i] = '_';
      i++;
    } else {
      l++;
      [nums[i], nums[l]] = [nums[l], nums[i]];
      i++;
      ans++;
    }
  }

  return ans;
};