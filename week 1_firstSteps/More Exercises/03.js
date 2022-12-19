function celciusToFahr(input) {
    let celcius = input[0];
    let fahrenheit = Number(celcius * (9 / 5) + 32);
    let fahrenheit2 = fahrenheit.toFixed(2);

    console.log(fahrenheit2);
}

celciusToFahr(["25"])