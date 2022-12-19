function classMaterials(input) {
    let penCount = Number(input[0] * 5.80);
    let markerCount = Number(input[1] * 7.20);
    let cleanDetergentLitres = Number(input[2] * 1.20);
    let discountPercent = Number(input[3]);
    let discountPercentDecimal = discountPercent / 100;

    let totalPrice = (penCount + markerCount + cleanDetergentLitres);
    let totalPriceDiscount = totalPrice - (totalPrice * discountPercentDecimal);

    console.log(totalPriceDiscount);

}
