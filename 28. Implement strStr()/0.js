/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }
  if (!needle.length) {
    return 0;
  };

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let j = 1;
      let ans = i;
      i++;
      while (j < needle.length) {
        if (haystack[i] != needle[j]) {
          break;
        }
        i++;
        j++;
      }
      if (j == needle.length) {
        return ans;
      } else {
        i = ans;
      }
    }
  }
  return -1;
};