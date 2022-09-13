var validUtf8 = function (data) {
  let bits = data.map((item) => {
    let bit = item.toString(2);
    if (bit.length < 8) {
      let len = bit.length;
      for (let i = 0; i < (8 - len); i++) {
        bit = '0' + bit;
      }
    }
    return bit;
  });
  let ans = true;

  let i = 0;

  while (i < bits.length) {
    let bit = bits[i];
    if (bit[0] == '0') {
      i++;
      continue;
    } else {
      // count 1s
      let ones = 1;
      for (let j = 1; j < bit.length; j++) {
        if (bit[j] == '1') {
          ones++;
        } else {
          break;
        }
      }
      // check 0 after ones
      if (ones > 1 && ones < 5 && bit[ones] == '0') {
        // check the folowed bits
        let len = ones + i;
        i++;
        for (let k = i; k < len; k++, i++) {
          if (bits[k] && bits[k][0] == '1' && bits[k][1] == '0') {
            continue;
          } else {
            ans = false;
            break;
          }
        }
      } else {
        ans = false;
        break;
      }
    }
  }

  return ans;
};