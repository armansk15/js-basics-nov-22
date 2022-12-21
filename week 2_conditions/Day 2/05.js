function godzillaKong(input) {
  let movieBudget = Number(input[0]);
  let actorsCount = Number(input[1]);
  let clothesPrice = Number(input[2]);

  let movieDecorBudget = movieBudget * 0.1;
  let clothesTotal = actorsCount * clothesPrice;

  if (actorsCount > 150) {
    let discount = clothesTotal * 0.9;
    clothesTotal = discount;
  }

  let totalMovieBudget = movieDecorBudget + clothesTotal;

  if (movieBudget >= totalMovieBudget) {
    let moneyLeft = (movieBudget - totalMovieBudget).toFixed(2);
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
  } else {
    let moneyNeeded = (totalMovieBudget - movieBudget).toFixed(2);
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded} leva more.`);
  }
}

godzillaKong(["15437.62", "186", "57.99"]);
