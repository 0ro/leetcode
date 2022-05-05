var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + r >> 1;
    if (arr[m] < arr[m + 1]) {
      l = m + 1
    } else {
      r = m
    }
  }

  return l;
};