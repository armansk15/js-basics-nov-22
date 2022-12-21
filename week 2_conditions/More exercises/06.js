function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalPrice = (magnolias * 3.25) + (hyacinths * 4) + (roses * 3.50) + (cactuses * 8);
    let taxes = totalPrice * 0.05;
    totalPrice -= taxes;

    if (giftPrice > totalPrice) {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalPrice)} leva.`)
    } else {
        console.log(`She is left with ${Math.floor(totalPrice - giftPrice)} leva.`)
    }
}

flowerShop([
    "2",
    "3",
    "5",
    "1",
    "50"
]);