function gardenCount(input) {
    let wholeYard = input[0] * 7.61;
    let discount = wholeYard * 0.18;
    let finalPrice = wholeYard - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

