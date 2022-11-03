/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let hash = {};
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let [a, b] = words[i];
    if (hash[b + a]) {
      ans += 4;
      if (hash[b + a] == 1) {
        delete hash[b + a];
      } else {
        hash[b + a] -= 1;
      }
    } else {
      hash[words[i]] = 1 + (hash[words[i]] || 0);
    }
  }

  for (let prop in hash) {
    let [a, b] = prop;

    if (a == b) {
      ans += 2;
      break;
    }
  }

  return ans;
};