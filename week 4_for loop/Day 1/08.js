function numbersBy9(input) {
  let n1 = Number(input.shift());
  let n2 = Number(input.shift());
  let sum = 0;
  let outputNumbers = ""

  for (let i = n1; i <= n2; i++) {
    if (i % 9 === 0) {
      sum += i;
      outputNumbers += i + "\n"
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(outputNumbers);

}

numbersBy9(["100", "200"]);
