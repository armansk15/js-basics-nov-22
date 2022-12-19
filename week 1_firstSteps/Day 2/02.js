function radianToGradus(input) {
    let radianMeasure = Number(input[0]);
    let gradusMeasure = Number(radianMeasure * 180 / Math.PI);
    
    console.log(gradusMeasure);
}

radianToGradus(["3.1416"])