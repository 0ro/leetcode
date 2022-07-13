var subsets = function(nums) {
  let ans = [];
  function dfs(pos, subset) {
    ans.push(subset.slice());
    for (let i = pos; i < nums.length; i++) {
      subset.push(nums[i]);
      dfs(i+1, subset);
      subset.pop();
    }
  }

  dfs(0, [])

  return ans;
};
