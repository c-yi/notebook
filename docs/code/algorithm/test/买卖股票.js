let prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(prices[i], min);
    }
    console.log(max);
};

console.time('1');
maxProfit(prices);
console.timeEnd('1');
