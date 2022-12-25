function newHouse(input) {
    let flowers = input.shift();
    let flowersCount = Number(input.shift());
    let budget = Number(input.shift());
    let totalPrice;

    switch (flowers) {
        case "Roses":
            totalPrice = flowersCount * 5;
            if (flowersCount > 80) {
                totalPrice *= 0.9
            }
        break;
        case "Dahlias":
            totalPrice = flowersCount * 3.80;
            if (flowersCount > 90) {
                totalPrice *= 0.85
            }
            break;
        case "Tulips":
            totalPrice = flowersCount * 2.80;
            if (flowersCount > 80) {
                totalPrice *= 0.85
            }
            break;
        case "Narcissus":
            totalPrice = flowersCount * 3;
            if (flowersCount < 120) {
                totalPrice *= 1.15
            }
            break;
        case "Gladiolus":
            totalPrice = flowersCount * 2.50;
            if (flowersCount < 80) {
                totalPrice *= 1.2
            }
            break;

        
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }


}

newHouse(["Roses","55","250"])









