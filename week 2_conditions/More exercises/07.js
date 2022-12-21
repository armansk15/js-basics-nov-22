function fuelTank(input) {
    let fuelType = input[0];
    let fuelVolume = Number(input[1]);

    if (fuelType !== "Diesel" && fuelType !== "Gas" && fuelType !== "Gasoline") {
        console.log("Invalid fuel!")
        return;
    }

    if (fuelVolume >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`)
    } else if (fuelVolume < 25) {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
    }
}

fuelTank(["Gasoline", "40"]);