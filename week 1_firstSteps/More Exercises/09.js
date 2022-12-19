function weatherForecast(input) {
    let currWeather = input.shift();

    if (currWeather === "sunny") {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!")
    }
}

weatherForecast(["snowy"])