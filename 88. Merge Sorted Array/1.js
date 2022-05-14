var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;

  while (j >= 0) {
    if ((nums1[i] ?? -Infinity) < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      nums1[i] = -Infinity;
      i--;
    }
    k--;
  }
};