/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let obj = {}
  let ans = [[]];
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    let len = ans.length;
    for (let j = 0; j < len; j++) {
      const res = ans[j].concat(el);
      if (!obj[res]) {
        obj[res] = 1;
        ans.push(ans[j].concat(el));
      }
    }
  }
  return ans;
};