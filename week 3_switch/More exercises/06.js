function truckDriver(input) {
  let season = input[0];
  let distance = Number(input[1]);
  let salary = 0;

  switch (season) {
    case "Spring":
    case "Autumn":
      if (distance <= 5000) {
        salary = distance * 0.75;
      } else if (distance <= 10000) {
        salary = distance * 0.95;
      }
      break;
    case "Summer":
      if (distance <= 5000) {
        salary = distance * 0.9;
      } else if (distance <= 10000) {
        salary = distance * 1.1;
      }
      break;
    case "Winter":
      if (distance <= 5000) {
        salary = distance * 1.05;
      } else if (distance <= 10000) {
        salary = distance * 1.25;
      }
  }
  if (distance > 10000 && distance <= 20000) {
    salary = distance * 1.45;
  }

  salary = salary * 4 * 0.9;

  console.log(salary.toFixed(2));
}

truckDriver([
    "Spring", 
    "1600"
]);
