function fuelTankPart2(input) {
    let fuelType = input[0];
    let fuelVolume = Number(input[1]);
    let membershipCard = input[2];

    let petrol = 2.22;
    let diesel = 2.33;
    let gasoline = 0.93;

    let totalPrice = 0;

    if (membershipCard === "Yes") {
        petrol -= 0.18;
        diesel -= 0.12;
        gasoline -= 0.08;

    }

        if (fuelType === "Gasoline") {
            totalPrice = fuelVolume * petrol
        } else if (fuelType === "Diesel") {
            totalPrice = fuelVolume * diesel
        } else if (fuelType === "Gas") {
            totalPrice = fuelVolume * gasoline
        }

        

        if (fuelVolume >= 20 && fuelVolume <= 25) {
            totalPrice *= 0.92
        } else if (fuelVolume > 25) {
            totalPrice *= 0.90;
        }
    
    
    console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTankPart2([
    "Diesel",
    "19",
    "No"
])