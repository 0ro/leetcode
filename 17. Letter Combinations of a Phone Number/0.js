/**
 * @param {string} digits
 * @return {string[]}

1. Create a map with possible values
2. ['a', 'b', 'c'] [def] [ghi]

     a         b         c
   d  e f    d  e f    d  e f

 */
const map = {
  "2": ['a', 'b', 'c'],
  "3": ['d', 'e', 'f'],
  "4": ['g', 'h', 'i'],
  "5": ['j', 'k', 'l'],
  "6": ['m', 'n', 'o'],
  "7": ['p', 'q', 'r', 's'],
  "8": ['t', 'u', 'v'],
  "9": ['w', 'x', 'y', 'z'],
}


var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }
  let ans = [];
  let set = [];

  for (let i = 0; i < digits.length; i++) {
    set.push(map[digits[i]].slice())
  }

  function track(localSet, init) {
    if (localSet.length == set.length) {
      ans.push(localSet.join(''))
      return;
    }

    for (let i = init; i < set.length; i++) {
      let j = 0;
      while (set[i][j] != undefined) {
        let val = set[i][j];
        if (val != null) {


          localSet.push(val);
          set[i][j] = null;

          track(localSet, i + 1);

          localSet.pop();
          set[i][j] = val;

        }
        j++;
      }
    }

  }

  track([], 0);

  return ans;
};