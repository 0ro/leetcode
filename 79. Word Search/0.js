/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  let ans = false;
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let letter = row[j];
      if (letter == word[0]) {
        search(i, j, 1);
      }
    }
  }

  function search(i, j, pos) {
    if (pos == word.length) {
      ans = true;
      return;
    }
    let t = board[i - 1]?.[j] || null;
    let r = board[i][j + 1] || null;
    let l = board[i][j - 1] || null;
    let b = board[i + 1]?.[j] || null;

    let ltr = word[pos];

    let el = board[i][j];
    board[i][j] = null;
    if (t && t == ltr) {
      search(i - 1, j, pos + 1);
    }
    if (r && r == ltr) {
      search(i, j + 1, pos + 1);
    }
    if (l && l == ltr) {
      search(i, j - 1, pos + 1);
    }
    if (b && b == ltr) {
      search(i + 1, j, pos + 1);
    }
    board[i][j] = el;
  }
  return ans;
};