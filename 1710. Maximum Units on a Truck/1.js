/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    let weightA = a[1];
    let weightB = b[1];

    return weightA > weightB ? -1 : 1;
  });
  let ans = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    let boxType = boxTypes[i];
    if (truckSize > boxType[0]) {
      truckSize -= boxType[0];
      ans += boxType[0] * boxType[1];
      boxType[0] = 0;
    } else {
      boxType[0] -= truckSize;
      ans += truckSize * boxType[1];
      truckSize = 0;
      break;
    }
  }

  return ans;
};