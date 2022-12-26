function tennisRanklist(input) {
  let tournamentsCount = Number(input[0]);
  let currentPoints = Number(input[1]);

  let averagePoints = 0;
  let wonTournaments = 0;
  let tournamentStage;

  for (let i = 2; i < input.length; i++) {
    tournamentStage = input[i];

    if (tournamentStage === "W") {
      averagePoints += 2000;
      wonTournaments++
    } else if (tournamentStage === "F") {
      averagePoints += 1200;
    } else if (tournamentStage === "SF") {
      averagePoints += 720;
    }
  }
  currentPoints += averagePoints;
  averagePoints /= tournamentsCount;

  let wonTournamentsPercent = (wonTournaments / tournamentsCount) * 100;

  console.log(`Final points: ${Math.floor(currentPoints)}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${wonTournamentsPercent.toFixed(2)}%`);
}

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


