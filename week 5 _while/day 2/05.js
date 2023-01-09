function coins(input) {
  let index = 0;
  let totalSum = Number(input[index]);

  let exchangeCoins = Math.round(totalSum * 100);
  let coinCount = 0;

  while (exchangeCoins > 0) {
    if (exchangeCoins >= 200) {
      exchangeCoins -= 200;
    } else if (exchangeCoins >= 100) {
      exchangeCoins -= 100;
    } else if (exchangeCoins >= 50) {
      exchangeCoins -= 50;
    } else if (exchangeCoins >= 20) {
      exchangeCoins -= 20;
    } else if (exchangeCoins >= 10) {
      exchangeCoins -= 10;
    } else if (exchangeCoins >= 5) {
      exchangeCoins -= 5;
    } else if (exchangeCoins >= 2) {
      exchangeCoins -= 2;
    } else {
      exchangeCoins -= 1;
    }
    coinCount++
  }
  console.log(coinCount)
}

coins(["2.73"]);
