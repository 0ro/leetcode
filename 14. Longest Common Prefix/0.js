/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }

  let ans = '';
  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    let every = true;
    for (let j = 1; j < strs.length; j++) {
      let str = strs[j];
      if (str[i] != firstStr[i]) {
        every = false;
      }
    }
    if (res) {
      ans += firstStr[i];
    } else {
      return ans;
    }
  }
  return ans;
};