function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);
    let basketballShoes = yearlyFee * 0.6;
    let basketballClothes = basketballShoes * 0.8;
    let basketballBall = basketballClothes * 0.25;
    let basketballAccs = basketballBall * 0.2;

    let totalSum = yearlyFee + basketballShoes + basketballClothes + basketballBall + basketballAccs;

    console.log(totalSum);
    
}

basketballEquipment(["550"])

