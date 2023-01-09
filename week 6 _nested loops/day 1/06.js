function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  let result = "";

  for (let i = floors; i > 0; i--) {
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        if (j === rooms - 1) {
          result += `L${i}${j}`;
        } else {
          result += `L${i}${j} `;
        }
      } else if (i % 2 === 0) {
        if (j === rooms - 1) {
          result += `O${i}${j}`;
        } else {
          result += `O${i}${j} `;
        }
      } else {
        if (j === rooms - 1) {
          result += `A${i}${j}`;
        } else {
          result += `A${i}${j} `;
        }
      }
    }
    console.log(result);
    result = "";
  }
}

building(["9", "5"]);
