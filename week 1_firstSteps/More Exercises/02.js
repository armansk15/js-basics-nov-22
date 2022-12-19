function triangleCount(input) {
    let firstCount = input[0];
    let secondCount = input[1];
    let area = firstCount * secondCount / 2;
    let area2 = area.toFixed(2);

    console.log(area2);
}

triangleCount(["20", "30"]);