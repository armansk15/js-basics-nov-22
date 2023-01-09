function traveling(input) {
  let index = 0;
  let destination = input[index];
  index++;

  while (destination !== "End") {
    let destinationPrice = Number(input[index]);
    index++;
    let moneySaved = Number(input[index]);
    index++;
    let moneySavedEnough = 0;
    while (destinationPrice > moneySavedEnough) {
      moneySavedEnough += moneySaved;

      moneySaved = Number(input[index]);
      index++
    }
    console.log(`Going to ${destination}!`);
    index--
    destination = input[index];
    index++;
    
  }
}

traveling([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])


