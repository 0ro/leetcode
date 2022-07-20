/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length;j++) {
      if (nums1[i] == nums2[j]) {
        ans.push(nums1[i]);
        nums2[j] *= -1;
        break;
      }
    }
  } 
 for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] < 0 ) {
      nums2[i]*=-1;
    } 
  }
  return ans;
};