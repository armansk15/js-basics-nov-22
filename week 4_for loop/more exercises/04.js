function grades(input) {
  	let studentCount = Number(input[0]);
    let eachGrade = Number(input[1]);

    let failed = 0;
    let gradeC = 0;
    let gradeB = 0;
    let topStudents = 0;
    let averageScore = 0

    for (let i = 1; i < input.length; i++) {
      eachGrade = Number(input[i]);

      if (eachGrade >= 2 && eachGrade < 3) {
        failed++
      } else if (eachGrade >= 3 && eachGrade < 4) {
        gradeC++
      } else if (eachGrade >= 4 && eachGrade < 5) {
        gradeB++
      } else if (eachGrade >= 5) {
        topStudents++
      }
      averageScore += eachGrade
    }
    averageScore /= studentCount;
    failed = (failed / studentCount) * 100;
    gradeC = (gradeC / studentCount) * 100;
    gradeB = (gradeB / studentCount) * 100;
    topStudents = (topStudents / studentCount) * 100;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${gradeB.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${gradeC.toFixed(2)}%`);
    console.log(`Fail: ${failed.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`)
}

grades([
  "6",
  "2",
  "3",
  "4",
  "5",
  "6",
  "2.2"
]);
