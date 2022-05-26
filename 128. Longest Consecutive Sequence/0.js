/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let set = new Set(nums);
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (set.has(current - 1)) {
      continue;
    }
    let localMax = 1;
    while (set.has(current + 1)) {
      localMax++;
      current++;
    }
    if (localMax > ans) {
      ans = localMax;
    }
  }
  return ans;
};