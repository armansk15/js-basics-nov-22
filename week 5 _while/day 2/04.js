function walking(input) {
    let index = 0;
    let stepsWalked = input[index];
    index++;
    let stepsGoal = 10000;
    let stepsTotal = 0;

    while(stepsWalked !== "Going home") {
        stepsWalked = Number(stepsWalked);
        stepsTotal += stepsWalked;

        if (stepsTotal >= stepsGoal) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsTotal - stepsGoal} steps over the goal!`);
            return;
        }
        stepsWalked = input[index];
        index++
    }
    stepsWalked = input[index];
    index++
    stepsWalked = Number(stepsWalked)
    stepsTotal += stepsWalked;
    if (stepsTotal >= stepsGoal) {
        console.log("Goal reached! Good job!");
            console.log(`${stepsTotal - stepsGoal} steps over the goal!`);
    } else {
        console.log(`${stepsGoal - stepsTotal} more steps to reach goal.`)
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



