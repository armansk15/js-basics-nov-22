function vacation(input) {
  let index = 0;
  let moneyForVacation = Number(input[index]);
  index++;
  let moneyAvailable = Number(input[index]);
  index++;
  let spendOrSave = input[index];
  index++;
  let moneySpent = Number(input[index]);
  index++;
  let spentMarathon = 0;
  let daysTotal = 0;

  while (moneyAvailable < moneyForVacation) {
    if (spendOrSave === "spend") {
      moneyAvailable -= moneySpent;
      spentMarathon++;
      daysTotal++;
    }
    if (moneyAvailable < 0) {
      moneyAvailable = 0;
    }
    if (spentMarathon === 5) {
      console.log("You can't save the money.");
      console.log(`${daysTotal}`);
      return;
    } else if (spendOrSave === "save") {
      moneyAvailable += moneySpent;
      daysTotal++
      spentMarathon = 0;
    }
    spendOrSave = input[index];
    index++;
    moneySpent = Number(input[index]);
    index++
  }
  console.log(`You saved the money for ${daysTotal} days.`)
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


