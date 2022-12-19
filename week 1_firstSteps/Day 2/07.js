function foodDelivery(input) {
   let chickenCount = Number(input[0]) * 10.35;
   let fishCount = Number(input[1]) * 12.40;
   let vegCount = Number(input[2]) * 8.15;

   let menuSum = chickenCount + fishCount + vegCount;
   let desertPrice = menuSum * 0.20
   let total = menuSum + desertPrice + 2.50;
   

   console.log(total);
}

foodDelivery(["2", "4", "3"])