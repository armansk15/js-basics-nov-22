function equalSumsEvenOddPosition(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);

  let currentPrintLine = "";

  for (let i = firstNum; i <= secondNum; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      let currentDig = Number(currentNum[j]);
      if (j % 2 === 0) {
        evenSum += currentDig;
      } else {
        oddSum += currentDig;
      }
    }
    if (oddSum === evenSum) {
      currentPrintLine += ` ${i}`
    }
  }
  console.log(currentPrintLine);
}

equalSumsEvenOddPosition([
    "100000", 
    "100050"
]);
