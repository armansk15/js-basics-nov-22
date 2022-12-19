function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideArea = x * y;
    let window = 1.5 * 1.5;
    let bothSides = (2 * sideArea) - (2 * window);
    let backdoor = x * x;
    let frontdoor = 1.2 * 2;
    let bothDoors = (2 * backdoor) - frontdoor;
    let areaTotalGreen = bothSides + bothDoors;
    let greenPaint = areaTotalGreen / 3.4;
    
    let roofRectangle = 2 * (x * y);
    let bothTrianagles = 2 * (x * h / 2);
    let areaTotalRed = roofRectangle + bothTrianagles;
    let redPaint = areaTotalRed / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting([
    "10.25",
    "15.45",
    "8.88"
]);