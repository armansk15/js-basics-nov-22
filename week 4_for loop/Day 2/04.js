function cleverLilly(input) {
  let ageLilly = Number(input.shift());
  let priceWM = Number(input.shift());
  let pricePerToy = Number(input.shift());
  let evenBirthdayMoney = 10
  let totalMoney = 0;

  for (let i = 1; i <= ageLilly; i++) {
    if (i % 2 === 0) {
      totalMoney += evenBirthdayMoney - 1;
      evenBirthdayMoney += 10
    } else {
      totalMoney += pricePerToy
    }
  }

  if (totalMoney >= priceWM) {
    console.log(`Yes! ${(totalMoney - priceWM).toFixed(2)}`)
  } else {
    console.log(`No! ${(priceWM - totalMoney).toFixed(2)}`)
  }
  
}

cleverLilly(["21","1570.98","3"])


