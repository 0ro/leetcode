/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  let modulo = 1e9 + 7;
  let horizont = horizontalCuts.concat([0, h]).sort((a, b) => a - b)
  let vertical = verticalCuts.concat([0, w]).sort((a, b) => a - b)

  let maxHorizont = 0;

  for (let i = 0; i < horizont.length - 1; i++) {
    let cur = horizont[i];
    let next = horizont[i + 1];

    maxHorizont = Math.max(next - cur, maxHorizont);
  }

  let maxVertical = 0;
  for (let i = 0; i < vertical.length - 1; i++) {
    let cur = vertical[i];
    let next = vertical[i + 1];

    maxVertical = Math.max(next - cur, maxVertical);
  }
  let res = BigInt(maxHorizont) * BigInt(maxVertical);

  return res % BigInt(modulo);
};
