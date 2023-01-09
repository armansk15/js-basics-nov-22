function dishwasher(input) {
  let index = 0;
  let detergent = Number(input[index]) * 750;
  index++;
  let dishes = input[index];
  index++;
  let cleanDishes = 0;
  let cleanPots = 0;

  while (dishes !== "End") {
    dishes = Number(dishes);

    if ((index - 1) % 3 === 0) {
        cleanPots += dishes
      dishes *= 15;
      detergent -= dishes;
    } else {
        cleanDishes += dishes
      dishes *= 5;
      detergent -= dishes;
    }
    dishes = input[index];
    index++;
  }
  
}

dishwasher(["2", "53", "65", "55", "End"]);
