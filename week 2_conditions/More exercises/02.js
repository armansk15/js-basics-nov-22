function sleepyTomCat(input) {
  let daysOff = Number(input[0]);

  let catPlayingGoal = 30000;
  let daysTotal = 365;
  let workingDays = daysTotal - daysOff;
  let totalMinutesPlayed = workingDays * 63 + daysOff * 127;

  if (catPlayingGoal >= totalMinutesPlayed) {
    let differenceMinutes = catPlayingGoal - totalMinutesPlayed;
    let hours = Math.floor(differenceMinutes / 60);
    let minutes = differenceMinutes % 60;
    console.log("Tom sleeps well");
    console.log(`${hours} hours and ${minutes} minutes less for play`);
  } else {
    totalMinutesPlayed -= catPlayingGoal;
    let hours = Math.floor(totalMinutesPlayed / 60);
    let minutes = totalMinutesPlayed % 60;
    console.log("Tom will run away");
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  }
}

sleepyTomCat(["113"]);
