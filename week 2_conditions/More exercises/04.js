function transportPrice(input) {
    let kilometers = Number(input[0]);
    let word = input[1];
    let totalPrice = 0;
    
    if (kilometers < 20) {
        let startingRate = 0.70;

        if (word === "day") {
            totalPrice = startingRate + kilometers * 0.79
        } else if (word === "night") {
            totalPrice = startingRate + kilometers * 0.90
        }
    } else if (kilometers >= 20 && kilometers < 100) {
        totalPrice = kilometers * 0.09
    } else if (kilometers >= 100) {
        totalPrice = kilometers * 0.06;
    }
    console.log(totalPrice.toFixed(2));

}

transportPrice(["180", "night"]);