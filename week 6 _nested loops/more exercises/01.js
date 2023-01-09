function uniquePIN(input) {
  let firstBorder = Number(input[0]);
  let secondBorder = Number(input[1]);
  let thirdBorder = Number(input[2]);
  let isPrime = true;

  for (let num1 = 2; num1 <= firstBorder; num1 += 2) {
    for (let num2 = 2; num2 <= secondBorder; num2++) {
      isPrime = true;
      for (let prime = 2; prime < num2; prime++) {
        if (num2 % prime === 0) {
          isPrime = false;
          break;
        }
      }
      for (let num3 = 2; num3 <= thirdBorder; num3 += 2) {
        if (isPrime) {
          console.log(`${num1} ${num2} ${num3}`);
        }
      }
    }
  }
}

uniquePIN(["3", "5", "5"]);
