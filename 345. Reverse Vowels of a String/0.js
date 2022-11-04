/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('');
  let left = 0;
  let right = s.length - 1;
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  while (left < right) {
    if (vowels.has(s[left]) && vowels.has(s[right])) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    } else if (vowels.has(s[left])) {
      right--;
    } else if (vowels.has(s[right])) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return s.join('');
};