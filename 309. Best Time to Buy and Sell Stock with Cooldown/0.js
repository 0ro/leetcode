/**
 * @param {number[]} prices
 * @return {number}

there are three states

HOLD 
SOLD
REST

REST can move to HOLD (buying) or stay in REST
HOLD can move to SOLD (selling) or stay in HOLD
SOLD has to move to REST (cool down)

we will calculate max profit for every day for each state related to previous day

max profit for today HOLD = prev REST profit - today price or today HOLD;
max profit for today SOLD = today price + prev HOLD;
max profit for today REST = prev REST or prev REST - today price;

result will be max profit of each states;

 */
var maxProfit = function (prices) {
  let hold = -prices[0];
  let sold = -Infinity;
  let rest = 0;

  for (let i = 1; i < prices.length; i++) {
    let prevSold = sold;
    sold = prices[i] + hold;
    hold = Math.max(hold, rest - prices[i]);

    rest = Math.max(prevSold, rest);
  }

  return Math.max(hold, sold, rest);
};