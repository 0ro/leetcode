export function peakIndexInMountainArray(arr: number[]): number {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = arr[i] > arr[ans] ? i : ans;
  }

  return ans;
};