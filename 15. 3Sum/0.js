/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b)

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      const sums2 = twoSums(nums.slice(i + 1), -1 * nums[i]);

      if (sums2.length) {
        for (let j = 0; j < sums2.length; j++) {
          let res = [nums[i]].concat(sums2[j]);
          ans.push(res)
        }
      }
    }
  }
  return ans;
};

function twoSums(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let sum = nums[left] + nums[right];
  let ans = [];

  while (left < right) {
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {

      ans.push([nums[left], nums[right]])
      left++;
      while (nums[left] == nums[left - 1] && left < right) {
        left++
      }
    }
    sum = nums[left] + nums[right];
  }

  return ans;
}