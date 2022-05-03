export function containsDuplicate(nums: number[]): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  return !(map.size === nums.length);
};