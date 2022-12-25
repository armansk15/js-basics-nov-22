function multiplyBy2(input) {
  let num = input[0];
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    num = Number(input[i]);
    if (num >= 0) {
      let multiplyNumber = num * 2;
      console.log(`Result: ${multiplyNumber.toFixed(2)}`);
      multiplyNumber = 0;
    } else {
      console.log("Negative number!");
    }
  }
}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20", "23.43"]);
