export function singleNumber(nums: number[]): number {
  let tmp = 0;
  for (const num of nums) {
    tmp = tmp ^ num
  }
  return tmp
};