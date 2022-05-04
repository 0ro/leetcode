export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = mergeArrays(nums1, nums2);
  return getMedianOfArray(mergedArray);
};

function mergeArrays(a: number[], b: number[]): number[] {
  let ans = [];

  let i = 0;
  let j = 0;
  while (a[i] !== undefined && b[j] !== undefined) {
    if (a[i] < b[j]) {
      ans.push(a[i]);
      i++;
    } else {
      ans.push(b[j]);
      j++;
    }
  }

  if (a[i] !== undefined) {
    ans.push(...a.slice(i))
  }

  if (b[j] !== undefined) {
    ans.push(...b.slice(j))
  }

  return ans;
}

function getMedianOfArray(array: number[]): number {
  const middle = array.length >> 1;
  return array.length % 2 ? array[middle] : (array[middle] + array[middle - 1]) / 2
}
