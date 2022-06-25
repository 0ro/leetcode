/**
 * @param {number[]} nums
 * @return {number}

[10,9,2,5,3,7,101,18]

[10] => 1 (insert result to some structure that help find with log n)
[10, 9] => 1 
[10, 9, 2] => 1
[10,9,2,5] => 
[10,9,2,5,3] => max()

max(1, try all find all LIS that more than me) => 2


 */
var lengthOfLIS = function (nums) {
  let ans = 0;
  let lis = [];
  for (let i = 0; i < nums.length; i++) {
    let allLises = findAllSmallerThanMe(nums[i]);
    let currentLis = allLises.length ? 1 + Math.max(...allLises) : 1;

    lis[i] = { num: nums[i], lis: currentLis };
    ans = Math.max(ans, currentLis);
  }

  function findAllSmallerThanMe(num) {
    let res = [];
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].num < num) {
        res.push(lis[i].lis)
      }
    }
    return res;
  }

  return ans;
};