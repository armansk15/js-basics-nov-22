function fruitShop(input) {
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    switch (fruit) {
        case "banana":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 2.50).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "apple":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 1.20).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 1.25).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "orange":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 0.85).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 0.90).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "grapefruit":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 1.45).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 1.60).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "kiwi":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 3.00).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "pineapple":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 5.50).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 5.60).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        case "grapes":
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    console.log((quantity * 3.85).toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    console.log((quantity * 4.20).toFixed(2));
                    break;
                    default:
                        console.log("error")
            }
            break;
        default:
            console.log("error");
    }
}

fruitShop(["grapes","Saturday" ,"0.5"])

