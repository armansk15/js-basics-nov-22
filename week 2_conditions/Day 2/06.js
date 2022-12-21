function swimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let meterInSeconds = Number(input[2]);

    let distanceToSwim = distanceMetres * meterInSeconds;
    let waterResistance = Math.floor((distanceMetres / 15)) * 12.5;
    let totalDistance = (distanceToSwim + waterResistance).toFixed(2);
    
    if (totalDistance >= recordInSeconds) {
        let secondSlower = (totalDistance - recordInSeconds).toFixed(2);
        console.log(`No, he failed! He was ${secondSlower} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalDistance} seconds.`)
    }
}

swimmingRecord(["55555.67", "3017", "5.03"])
