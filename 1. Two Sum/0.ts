export function twoSum(nums: number[], target: number): number[] {
  let seen = {}
  for (let i = 0; i < nums.length; i++) {
    if (seen[target - nums[i]] !== undefined) {
      return [seen[target - nums[i]], i];
    } else {
      seen[nums[i]] = i;
    }
  }
};