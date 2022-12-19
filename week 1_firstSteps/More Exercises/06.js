function fishLand(input) {
    let firstRow = Number(input[0]);
    let secondRow = Number(input[1]);
    let thirdRow = Number(input[2]);
    let fourthRow = Number(input[3]);
    let fifthRow = Number([input[4]]);

    let firstRowOne = firstRow + firstRow * 0.6;
    let secondRowTwo = thirdRow * firstRowOne;
    let thirdRowThree = secondRow + secondRow * 0.8;
    let fourthRowFour = fourthRow * thirdRowThree;
    let fifthRowFive = fifthRow * 7.50;

    let totalSum = secondRowTwo + fourthRowFour + fifthRowFive;
    let totalSumFixed = totalSum.toFixed(2);

    console.log(totalSumFixed);
}

fishLand(["6.90", "4.20", "1.5", "2.5", "1"])