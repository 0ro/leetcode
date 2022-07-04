/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let copy = [];
  for (let i = 0; i < board.length; i++) {
    copy[i] = board[i].slice();
  }
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy[i].length; j++) {
      let me = copy[i][j];
      let t = copy[i - 1]?.[j] || 0;
      let tl = copy[i - 1]?.[j - 1] || 0;
      let tr = copy[i - 1]?.[j + 1] || 0;
      let r = copy[i]?.[j + 1] || 0;
      let b = copy[i + 1]?.[j] || 0;
      let br = copy[i + 1]?.[j + 1] || 0;
      let bl = copy[i + 1]?.[j - 1] || 0;
      let l = copy[i]?.[j - 1] || 0;

      let sum = [t, tl, tr, r, br, bl, b, l].reduce((acc, item) => acc + item, 0)

      if (me) {
        board[i][j] = sum > 3 || sum < 2 ? 0 : 1;
      } else {
        board[i][j] = sum == 3 ? 1 : 0;
      }
    }
  }
};