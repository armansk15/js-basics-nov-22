function countFoodCost(input) {
    let dogFood = Number(input[0] * 2.50);
    let catFood = Number(input[1] * 4);
    let finalCost = dogFood + catFood;

    console.log(finalCost)

    
}

countFoodCost(["4", "5"])
