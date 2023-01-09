function examPreparation(input) {
  let index = 0;
  let badGrades = Number(input[index]);
  index++;
  let taskName = input[index];
  index++;
  let currentGrade = Number(input[index]);
  index++;
  let badGradesCount = 0;
  let totalGradeScore = 0;
  let numberOfTasks = 0;
  let lastTask = ''


  while (taskName !== "Enough") {
    lastTask = taskName;
    if (currentGrade <= 4) {
      badGradesCount++;
    }
    if (badGradesCount === badGrades) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      return;
    }
    totalGradeScore += currentGrade;
    taskName = input[index]
    index++
    currentGrade = Number(input[index]);
    index++
    numberOfTasks++

  }
  let averageGrade = totalGradeScore / numberOfTasks
  console.log(`Average score: ${averageGrade.toFixed(2)}`);
  console.log(`Number of problems: ${numberOfTasks}`);
  console.log(`Last problem: ${lastTask}`)
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

