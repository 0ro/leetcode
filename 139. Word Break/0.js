/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (str, wordDict) {
  let ans = false;
  function search(s) {
    if (+s === 0) {
      ans = true;
      return;
    }
    for (let i = 0; i < wordDict.length; i++) {
      let word = wordDict[i];
      let index = s.indexOf(word);

      if (index !== -1) {
      console.log({word, s});
        search(s.replace(word, ' '))
      }
    }
  }
  search(str);

  return ans;
};
