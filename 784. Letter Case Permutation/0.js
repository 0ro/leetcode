/**
"a1b2"

ans ["a1b2"]

perm ["a1b2"]
"a"


 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (s) {
  let ans = [s];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") continue;

    let permutation = [...ans];

    for (let j = 0; j < permutation.length; j++) {
      let arr = permutation[j].split('');
      arr[i] = s[i] >= "a" && s[i] <= "z" ? s[i].toUpperCase() : s[i].toLowerCase();

      permutation[j] = arr.join('');
      ans.push(permutation[j])
    }

  }

  return ans;
};