function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionsCount * 8.20 + truckCount * 2;
    let toysCount = puzzleCount + dollCount + bearCount + minionsCount + truckCount;

    if (toysCount >= 50) {
    moneyEarned = moneyEarned * 0.75
    }

    let moneyAfterRent = moneyEarned * 0.90;

    if (moneyAfterRent >= vacationPrice) {
        let moneyLeft = (moneyAfterRent - vacationPrice).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`)
    } else {
        let moneyNeeded = (vacationPrice - moneyAfterRent).toFixed(2)
        console.log(`Not enough money! ${moneyNeeded} lv needed.`)
    }

}


toyShop(["40.8","20","25","30","50","10"])
toyShop(["320","8","2","5","5","1"]);


