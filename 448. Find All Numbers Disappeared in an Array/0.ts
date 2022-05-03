export function findDisappearedNumbers(nums: number[]): number[] {
  let ans: number[] = [];
  let obj = {};

  for (let val of nums) {
    obj[val] = val;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      ans.push(i);
    }
  }
  return ans;
};