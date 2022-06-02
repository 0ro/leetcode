/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  let ans = [];

  backTrack(nums, ans, [], []);
  return ans;
};

function backTrack(nums, ans, currentPermutation, currentUsed) {
  if (currentPermutation.length == nums.length) { // base case
    ans.push([...currentPermutation]) //push a copy of array
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!currentUsed[i]) {
      // make choice
      currentUsed[i] = true;
      currentPermutation.push(nums[i])

      backTrack(nums, ans, currentPermutation, currentUsed)
      // undo choice
      currentUsed[i] = false;
      currentPermutation.pop();
    }
  }
}