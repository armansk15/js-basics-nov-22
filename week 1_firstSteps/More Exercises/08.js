function circleAnP(input) {
    let r = Number(input.shift());

    let area = Math.PI * r * r;
    let perimeter = Math.PI * 2 * r
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAnP(["4.5"])