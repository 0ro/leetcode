export function singleNumber(nums: number[]): number {
  const obj: Record<string, number> = {};
  for (let num of nums) {
    if (obj[num] !== undefined) {
      delete obj[num]
    } else {
      obj[num] = num
    }
  }
  return Object.values(obj)[0]
};