function trainTheTrainers(input) {
  let index = 0;
  let judgeCount = Number(input[index]);
  index++;
  let presentationName = input[index];
  index++;
  let presentationCount = 0;
  let gradesTotalAvg = 0;
  let gradesTotalAvgGroup = 0;

  while (presentationName !== "Finish") {
    presentationCount++;

    for (let i = 0; i < judgeCount; i++) {
      let score = Number(input[index]);
      index++;

      gradesTotalAvg += score;
    }
    gradesTotalAvg /= judgeCount;
    console.log(`${presentationName} - ${gradesTotalAvg.toFixed(2)}.`);
    gradesTotalAvgGroup += gradesTotalAvg;
    gradesTotalAvg = 0;

    presentationName = input[index];
    index++;
  }
  gradesTotalAvgGroup /= presentationCount;
  console.log(`Student's final assessment is ${gradesTotalAvgGroup.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
]);


