/**
 * @param {string} s
 * @return {string}

babad
 ^

babbad
  ^^

 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    let m = i;
    let l = i - 1;
    let r = i + 1;
    let palindrome = s[m];
    ans = palindrome.length > ans.length ? palindrome : ans;
    while (s[l] && s[r] && s[l] === s[r]) {
      palindrome = s[l] + palindrome + s[r];
      ans = palindrome.length > ans.length ? palindrome : ans;
      l--;
      r++;
    }
    if (s[i] == s[i + 1]) {
      let l = i - 1;
      let r = i + 2;
      let palindrome = s[i] + s[i + 1];

      ans = palindrome.length > ans.length ? palindrome : ans;

      while (s[l] && s[r] && s[l] === s[r]) {
        palindrome = s[l] + palindrome + s[r];
        ans = palindrome.length > ans.length ? palindrome : ans;
        l--;
        r++;
      }

    }
  }

  return ans;
};