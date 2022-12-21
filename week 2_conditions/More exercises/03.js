function harvest(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let z = Number(input[2]);
  let employees = Number(input[3]);

  let grapesTotal = x * y;
  let wine = (0.4 * grapesTotal) / 2.5;

  if (wine >= z) {
    let wineLeft = wine - z;
    let wineEachEmployee = wineLeft / employees;
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(wine)} liters.`
    );
    console.log(
      `${Math.ceil(wineLeft)} liters left -> ${Math.ceil(
        wineEachEmployee
      )} liters per person.`
    );
  } else {
    let wineNeeded = z - wine;
    console.log(
      `It will be a tough winter! More ${Math.floor(
        wineNeeded
      )} liters wine needed.`
    );
  }
}

harvest([
    "1020",
    "1.5",
    "425",
    "4"
])
