function sumOfTwoNumbers(input) {
  let numStart = Number(input.shift());
  let numEnd = Number(input.shift());
  let magicNum = Number(input.shift());
  let combination = 0;
  let isFound = false;

  for (let x1 = numStart; x1 <= numEnd; x1++) {
    for (let x2 = numStart; x2 <= numEnd; x2++) {
      combination++;

      if (x1 + x2 === magicNum) {
        console.log(
          `Combination N:${combination} (${x1} + ${x2} = ${magicNum})`
        );
        return;
      }
    }
  }
  console.log(`${combination} combinations - neither equals ${magicNum}`);
}

sumOfTwoNumbers([
    "23",
    "24",
    "20"
]);

