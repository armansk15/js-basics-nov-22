function cinema(input) {
    let ticket = input.shift();
    let row = Number(input.shift());
    let column = Number(input.shift());
    let income = 0;

    if (ticket == "Premiere") {
        income = 12 * row * column

    } else if (ticket == "Normal") {
        income = 7.50 * row * column
    } else if (ticket == "Discount") {
        income = 5 * row * column
    }

    console.log((income).toFixed(2))

}

cinema(["Normal", "21", "13"])


