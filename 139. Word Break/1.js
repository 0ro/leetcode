/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);

  dp[s.length] = true;

  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      if (dp[i]) {
        break;
      }
      let w = wordDict[j];
      let sliced = s.slice(i, i + w.length);
      if (sliced.length == w.length && sliced == w) {
        dp[i] = dp[i + w.length];
      }
    }
  }

  return dp[0];
};