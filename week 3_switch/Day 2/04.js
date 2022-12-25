function fishingBoat(input) {
    let groupBudget = Number(input.shift());
    let season = input.shift();
    let fishersCount = input.shift();
    let totalPrice;

    switch (season) {
        case "Spring":
            totalPrice = 3000
            break;
        case "Summer":
        case "Autumn":
            totalPrice = 4200;
            break;
        case "Winter":
            totalPrice = 2600;
            break;
    }

    if (fishersCount <= 6) {
        totalPrice *= 0.9
    } else if (fishersCount <= 11) {
        totalPrice *= 0.85
    } else {
        totalPrice *= 0.75
    }

    if (fishersCount % 2 == 0 && season != "Autumn") {
        totalPrice *= 0.95
    } 

    if (groupBudget >= totalPrice) {
        console.log(`Yes! You have ${(groupBudget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - groupBudget).toFixed(2)} leva.`)
    }
}

fishingBoat(["2000","Winter","13"])


