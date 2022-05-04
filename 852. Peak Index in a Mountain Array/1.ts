export function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[middle] > (arr[middle - 1] ?? 0) && arr[middle] > (arr[middle + 1] ?? 0)) {
      return middle;
    } else if (arr[middle] > (arr[middle - 1] ?? 0) && arr[middle] < (arr[middle + 1] ?? 0)) {
      left = middle + 1;
    } else if (arr[middle] < (arr[middle - 1] ?? 0) && arr[middle] > (arr[middle + 1] ?? 0)) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
};