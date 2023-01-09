function graduation(input) {
    let index = 0;
    let studentName = input[index];
    index++;
    let currentGrade = Number(input[index]);
    index++;
    let year = 1
    let examFailed = 0;
    let sumGrade = 0;

    while(year <= 12) {
        if (currentGrade < 4) {
            examFailed++
        
            if (examFailed === 2) {
                console.log(`${studentName} has been excluded at ${year} grade`)
                return;
            }
            continue;
        }
        
        sumGrade += currentGrade;
        year++
        currentGrade = Number(input[index]);
        index++
    }
    let avgGrade = sumGrade / 12;
    console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`)
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
