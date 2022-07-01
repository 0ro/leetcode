/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let step = numRows + numRows - 2
  let rows = new Array(numRows).fill('');
  for (let i = 0; i < s.length; i += step) {
    let slice = s.slice(i, step + i);

    for (let j = 0; j < slice.length; j++) {
      if (j < numRows) {
        rows[j] += slice[j];
      } else {
        rows[numRows - 2 - (j - numRows)] += slice[j];
      }
    }
  }

  return rows.join('');
};