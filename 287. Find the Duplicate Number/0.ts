export function findDuplicate(nums: number[]): number {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) {
      return nums[i];
    }
    arr[nums[i]] = nums[i];
  }
  return -1;
};