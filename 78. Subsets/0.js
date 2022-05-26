/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  let ans = [[]];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let len = ans.length;
    for (let j = 0; j < len; j++) {
      ans.push(ans[j].concat(current));
    }
  }

  return ans;
};