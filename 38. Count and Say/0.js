/**
 * @param {number} n
 * @return {string}

"1211" 


 */
var countAndSay = function (n) {
  if (n == 1) {
    return '1';
  }
  function say(str) {
    let cnt = 1;
    let ans = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i + 1]) {
        cnt++;
      } else {
        ans += cnt + str[i];
        cnt = 1;
      }
    }
    return ans;
  }
  return say(countAndSay(n - 1))
};