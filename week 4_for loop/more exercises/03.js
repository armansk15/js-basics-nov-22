function logistics(input) {
  let cargoCount = Number(input[0]);
  let tonnage = 0;
  let cargoTotal = 0;
  let bus = 0;
  let truck = 0;
  let train = 0;

  for (let i = 1; i <= cargoCount; i++) {
    tonnage = Number(input[i]);
    cargoTotal += tonnage;

    if (tonnage <= 3) {
      bus += tonnage;
    } else if (tonnage <= 11) {
      truck += tonnage;
    } else {
      train += tonnage;
    }
  }

  let averagePrice = ((bus * 200 + truck * 175 + train * 120) / cargoTotal).toFixed(2);
  console.log(averagePrice);
  console.log(`${((bus/cargoTotal) * 100).toFixed(2)}%\n${((truck/cargoTotal) * 100).toFixed(2)}%\n${((train/cargoTotal) * 100).toFixed(2)}%`);
  
}

logistics(["5", "2", "10", "20", "1", "7"]);
