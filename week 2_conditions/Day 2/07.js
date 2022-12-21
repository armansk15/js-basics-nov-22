function shopping(input) {
    let budget = Number(input[0]);
    let graphicsCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramCards = Number(input[3]);

    let graphicsPrice = (graphicsCards * 250);
    let processorsPrice = (graphicsPrice * 0.35) * processors;
    let ramPrice = (graphicsPrice * 0.1) * ramCards;

    let totalPrice = graphicsPrice + processorsPrice + ramPrice;

    if (graphicsCards > processors) {
        totalPrice = totalPrice * 0.85
    }

    if (budget >= totalPrice) {
        let moneyLeft = (budget - totalPrice).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`)
    } else {
        let moneyNeeded = (totalPrice - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`)
    }
}

shopping(["920.45","3","1","1"])
