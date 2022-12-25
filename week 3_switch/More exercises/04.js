function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let price = 0;
  let carType = "";
  let classType = "";

  if (budget <= 100) {
    classType = "Economy class";
    if (season === "Summer") {
      price = budget * 0.35;
    } else if (season === "Winter") {
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    classType = "Compact class";
    if (season === "Summer") {
      price = budget * 0.45;
    } else if (season === "Winter") {
      price = budget * 0.80;
    }
} else if (budget > 500) {
    classType = "Luxury class"
    carType = "Jeep";
    price = budget * 0.90
  }

  if (season === "Summer" && classType !== "Luxury class") {
    carType = "Cabrio"
  } else {
    carType = "Jeep"
  }

  console.log(`${classType}`);
  console.log(`${carType} - ${price.toFixed(2)}`)
}

carToGo([
    "1010", 
    "Summer"
]);
