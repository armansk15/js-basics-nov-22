function weatherForecastTwo(input) {
    let currentTemperature = Number(input[0]);

    if (currentTemperature >= 26.00 && currentTemperature <= 35.00) {
        console.log("Hot")
    } else if (currentTemperature >= 20.1 && currentTemperature <= 25.9) {
        console.log("Warm")
    } else if (currentTemperature >= 15 && currentTemperature <= 20.00) {
        console.log("Mild")
    } else if (currentTemperature >= 12 && currentTemperature <= 14.9) {
        console.log("Cool")
    } else if (currentTemperature >= 5.00 && currentTemperature <= 11.9) {
        console.log("Cold")
    } else {
        console.log("unknown")
    }
}

weatherForecastTwo(["22.4"])