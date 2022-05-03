// cyclic sort
export function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    while(true) {
      const j = nums[i] - 1;
      if (nums[i] === nums[j]) {
        break;
      } 
      if (nums[i] !== nums[j]) {
        const tmp = nums[j];
        nums[j] = nums[i]
        nums[i] = tmp;
      }
    }
  }
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(i+1)
    }
  }
  return ans;
};