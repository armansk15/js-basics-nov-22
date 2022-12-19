function repaintingCalc(input) {
   let nylonCount = Number(input[0]);
   let paintCount = Number(input[1]);
   let detergentLitres = Number(input[2]) * 5.00;
   let hoursWorked = Number(input[3]);

   let nylonCount2 = (nylonCount + 2) * 1.50;
   let paintCount2 = (paintCount * 1.1) * 14.50;

   let materialPrice = nylonCount2 + paintCount2 + detergentLitres + 0.40;
   let workersWage = (materialPrice * 0.3) * hoursWorked;
   let totalSum = materialPrice + workersWage;
   
   console.log(totalSum);
}

repaintingCalc(["10", "11", "4", "8"])

