function oscars(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let evaluativeCount = Number(input[2]);
  let neededPoints = 1250.5;

  for (let i = 3; i < input.length; i += 2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i + 1]);

    let result = (judgeName.length * judgePoints) / 2;
    academyPoints += result;

    if (academyPoints > neededPoints) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }

  if (neededPoints > academyPoints) {
    console.log(
      `Sorry, ${actorName} you need ${(neededPoints - academyPoints).toFixed(
        1
      )} more!`
    );
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
