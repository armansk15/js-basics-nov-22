function gardeningCount(input) {
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegTotal = Number(input[2] * vegPrice);
    let fruitTotal = Number(input[3] * fruitPrice);
    let totalPrice = vegTotal + fruitTotal
    let totalPrice2 = Number(totalPrice / 1.94)
    let totalPrice3 = totalPrice2.toFixed(2);
    

    console.log(totalPrice3)
}

gardeningCount(["0.194", "19.4", "10", "10"])