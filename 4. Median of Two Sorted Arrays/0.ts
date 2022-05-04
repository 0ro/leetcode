export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const result = concatAndSort(nums1, nums2);
  return getMedianOfArray(result)
};

function getMedianOfArray(num: number[]):number {
  if (num.length % 2) {
    return num[Math.floor(num.length/2)]
  } else {
    return (num[num.length/2] + num[num.length/2 - 1]) / 2
  }
}

function concatAndSort(nums1: number[], nums2: number[]):number[] {
  return quickSort(nums1.concat(nums2));
}

function quickSort(array: number[]) {
  return array.sort((a,b) => a > b ? 1 : -1 );
}

