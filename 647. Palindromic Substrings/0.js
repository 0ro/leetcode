/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = s.length;

  for (let i = 0; i < s.length; i++) {
    let l = i - 1;
    let r = i + 1;
    let c = s[i];

    while (s[l] && s[r] && s[l] == s[r]) {
      ans++;
      l--;
      r++;
    }
    l = i - 1;
    r = i + 1;
    if (c == s[r]) {
      r++;
      ans++;
      while (s[l] && s[r] && s[l] == s[r]) {
        l--;
        r++;
        ans++;
      }
    }
  }

  return ans;
};