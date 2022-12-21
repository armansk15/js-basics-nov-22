function pets(input) {
    let countDays = Number(input[0]);
    let foodAvailable = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFoodGrams = Number(input[4]);

    turtleFoodGrams /= 1000;
    
    dogFood *= countDays;
    catFood *= countDays;
    turtleFoodGrams *= countDays;

    let foodTotalEaten = dogFood + catFood + turtleFoodGrams;

    if (foodAvailable >= foodTotalEaten) {
        console.log(`${Math.floor(foodAvailable - foodTotalEaten)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(foodTotalEaten - foodAvailable)} more kilos of food are needed.`)
    }
}

pets([
    "5",
    "10",
    "2.1",
    "0.8",
    "321"
]);