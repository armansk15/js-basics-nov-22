function specialNum(input) {
  let num = Number(input[0]);
  let output = "";
  let allNumbers = "";
  let isSpecial = true

  for (let i = 1111; i <= 9999; i++) {
    let numString = i + "";
    for (let j = 0; j < numString.length; j++) {
      if (num % numString[j] === 0) {
        output += numString[j];
      } else {
        isSpecial = false;
      }
    }
    if (isSpecial) {
        allNumbers += `${output} `
        output = ""
    } else {
        output = "";
        isSpecial = true;
    }
    
  }
  console.log(allNumbers);
}

specialNum(["11"]);
