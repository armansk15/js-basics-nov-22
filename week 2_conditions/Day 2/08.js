function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * 1/8;
    let breakTime = breakDuration * 1/4;
    let timeLeft = breakDuration - lunchTime - breakTime;

    if (timeLeft >= episodeDuration) {
        let minutesLeft = Math.ceil(timeLeft - episodeDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${minutesLeft} minutes free time.`);
    } else {
        let minutesNeeded = Math.ceil(episodeDuration - timeLeft);
        console.log(`You don't have enough time to watch ${movieName}, you need ${minutesNeeded} more minutes.`)
    }
}


lunchBreak(["Teen Wolf","48","60"]);

