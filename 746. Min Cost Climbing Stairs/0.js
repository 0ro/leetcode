/**
 * @param {number[]} cost
 * @return {number}
 
10,15,20 

10,15,30
 
 
 */
var minCostClimbingStairs = function(cost) {
  let dp = Array.from({length: cost.length + 2}).fill(0);
  
  for (let i = 2; i < dp.length; i++) {
    dp[i] = cost[i - 2] + Math.min(dp[i - 1], dp[i - 2])
  }
  
  return Math.min(dp[dp.length - 2], dp[dp.length - 1]);
};