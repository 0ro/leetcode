/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let me = board[i][j];
      let t = board[i - 1]?.[j] || 0;
      let tl = board[i - 1]?.[j - 1] || 0;
      let tr = board[i - 1]?.[j + 1] || 0;
      let r = board[i]?.[j + 1] || 0;
      let b = board[i + 1]?.[j] || 0;
      let br = board[i + 1]?.[j + 1] || 0;
      let bl = board[i + 1]?.[j - 1] || 0;
      let l = board[i]?.[j - 1] || 0;

      let sum = [t, tl, tr, r, br, bl, b, l].reduce((acc, item) => acc + (Math.abs(Math.floor(item))), 0)

      if (me) {
        board[i][j] = sum > 3 || sum < 2 ? -0.5 : me;
      } else {
        board[i][j] = sum == 3 ? 0.5 : me;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = Math.ceil(board[i][j])
    }
  }

};