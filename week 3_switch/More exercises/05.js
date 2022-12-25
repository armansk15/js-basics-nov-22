function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let accomodation = "";
  let destination = "";
  let price = 0;

  if (budget <= 1000) {
    accomodation = "Camp";
    if (season === "Summer") {
      price = budget * 0.65;
    } else if (season === "Winter") {
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    accomodation = "Hut";
    if (season === "Summer") {
      price = budget * 0.8;
    } else if (season === "Winter") {
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    accomodation = "Hotel";
    price = budget * 0.90
  }

  if (season === "Summer") {
    destination = "Alaska"
  } else if (season === "Winter") {
    destination = "Morocco"
  }

  console.log(`${destination} - ${accomodation} - ${price.toFixed(2)}`);
}

vacation([
    "3460",
    "Summer"
]);
