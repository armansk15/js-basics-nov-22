function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);
    let percentageDecimal = percentage / 100;

    let tankVolume = length * width * height;
    let volumeLitres = tankVolume / 1000;
    let totalLitres = volumeLitres * (1-percentageDecimal);

    console.log(totalLitres);

}

fishTank(["105", "77", "89", "18.5"]);