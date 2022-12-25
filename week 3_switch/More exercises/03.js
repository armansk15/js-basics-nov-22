function flowers(input) {
  let chrysanthemum = Number(input[0]);
  let roses = Number(input[1]);
  let tulips = Number(input[2]);
  let season = input[3];
  let dayType = input[4];

  let flowersTotalCount = chrysanthemum + roses + tulips;

  let chrysanthemumCount = 0;
  let rosesCount = 0;
  let tulipsCount = 0;
  let flowersTotal = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      chrysanthemumCount += chrysanthemum * 2.0;
      rosesCount += roses * 4.1;
      tulipsCount += tulips * 2.5;
      break;
    case "Autumn":
    case "Winter":
      chrysanthemumCount += chrysanthemum * 3.75;
      rosesCount += roses * 4.5;
      tulipsCount += tulips * 4.15;
      break;
  }
  flowersTotal += chrysanthemumCount + rosesCount + tulipsCount;
  if (dayType === "Y") {
    flowersTotal += flowersTotal * 0.15;
  }

  if (tulips > 7 && season === "Spring") {
    flowersTotal *= 0.95;
  }
  if (roses >= 10 && season === "Winter") {
    flowersTotal *= 0.9;
  }
  if (flowersTotalCount > 20) {
    flowersTotal *= 0.8;
  }
  flowersTotal += 2;
  console.log(flowersTotal.toFixed(2));
}

flowers([
    "3",
    "10",
    "9",
    "Winter",
    "N"
])

