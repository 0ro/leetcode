export function missingNumber(nums: number[]): number {
  let ans = [];
  let obj = {};

  for (let val of nums) {
    obj[val] = val;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      ans.push(i);
    }
  }
  return ans[0];
};