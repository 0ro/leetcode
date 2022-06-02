/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  backtrack(nums, ans, []);

  return ans;
};

function backtrack(nums, ans, currentPermutate) {
  if (currentPermutate.length == nums.length) {
    ans.push([...currentPermutate])
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prev = nums[i - 1]
    if (num != null && prev != num) {
      nums[i] = null;
      currentPermutate.push(num)
      backtrack(nums, ans, currentPermutate)
      nums[i] = num;
      currentPermutate.pop();
    }
  }
}