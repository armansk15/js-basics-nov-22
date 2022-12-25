function operationsBetweenNumbers(input) {
  let n1 = Number(input.shift());
  let n2 = Number(input.shift());
  let operator = input.shift();
  let result;
  let evenOdd;
  let remainder;

  switch (operator) {
    case "+":
      result = n1 + n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;

    case "-":
      result = n1 - n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;

    case "*":
      result = n1 * n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;

    case "/":
      result = (n1 / n2).toFixed(2);
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
      }
      break;

    case "%":
      remainder = n1 % n2;
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} ${operator} ${n2} = ${remainder}`);
      }
      break;
  }
}

operationsBetweenNumbers(["112", "0", "/"]);
