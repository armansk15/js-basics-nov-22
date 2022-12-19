function trapezoidCount(input) {
    let firstCount = Number(input[0]);
    let secondCount = Number(input[1]);
    let thirdCount = Number(input[2]);
    let finalCount = (firstCount + secondCount) * thirdCount / 2;
    let finalCount2 = finalCount.toFixed(2);
    
    console.log(finalCount2);
}

trapezoidCount(["8", "13", "7"])