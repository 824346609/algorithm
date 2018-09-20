var maxProfit = function(prices) {
    var stock = prices;
    var len = stock.length;
 var profit = 0;
 var buy = 0;
 var sell = 0;
 var sum = 0;
 for (var i = 0; i < len; i++) {
     if (stock[i] < stock[i + 1]) {
         buy = stock[i];
         for (var j = i + 1; j < len; j++) {
             if (stock[j] > stock[j + 1]) {
                 sell = stock[j];
                 break;
             } 
             else if (j == len - 1 && sell == 0) {
                 sell = stock[j];
             }
         }
         i = j;
         profit = sell - buy;
         sum += profit;
         sell = 0;
         buy = 0;
     } else if (i == len - 1 && sum == 0) {
         sum = 0;
     }
 }
  return sum;
};