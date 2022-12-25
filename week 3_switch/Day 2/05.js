function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination;
    let moneySpent;
    let stayingPlace

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season == "summer") {
            moneySpent = budget * 0.3
            stayingPlace = "Camp"
        } else if (season == "winter") {
            moneySpent = budget * 0.7
            stayingPlace = "Hotel"
        }
    }

    if (budget > 100 && budget <= 1000) {
        destination = "Balkans"
        if (season == "summer") {
            moneySpent = budget * 0.4
            stayingPlace = "Camp"
        } else if (season == "winter") {
            moneySpent = budget * 0.8
            stayingPlace = "Hotel"
        }
    }

    if (budget > 1000) {
        destination = "Europe"
        moneySpent = budget * 0.9
        stayingPlace = "Hotel"
    }

    moneySpent = moneySpent.toFixed(2)

    console.log(`Somewhere in ${destination}`);
    console.log(`${stayingPlace} - ${moneySpent}`)

    
}

journey(["312", "summer"])