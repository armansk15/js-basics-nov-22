function skiTrip(input) {
    let stayingDays = Number(input.shift());
    let roomType = input.shift();
    let rating = input.shift();
    let totalPrice;
    let stayingDaysMinus1 = stayingDays - 1

    switch (roomType) {
        case "room for one person":
            totalPrice = stayingDaysMinus1 * 18
            if (rating === "positive") {
                totalPrice *= 1.25
            } else if (rating === "negative") {
                totalPrice *= 0.9
            }
            break;
        case "apartment":
            totalPrice = stayingDaysMinus1 * 25;
            if (stayingDays < 10) {
                totalPrice *= 0.7
            } else if (stayingDaysMinus1 >= 10 && stayingDaysMinus1 <= 15) {
                totalPrice *= 0.65
            } else {
                totalPrice *= 0.5
            }
            if (rating === "positive") {
                totalPrice *= 1.25
            } else if (rating === "negative") {
                totalPrice *= 0.9
            }
            break;
        case "president apartment":
            totalPrice = stayingDaysMinus1 * 35
            if (stayingDays < 10) {
                totalPrice *= 0.9
            } else if (stayingDaysMinus1 >= 10 && stayingDaysMinus1 <= 15) {
                totalPrice *= 0.85
            } else {
                totalPrice *= 0.8
            }
            if (rating === "positive") {
                totalPrice *= 1.25
            } else if (rating === "negative") {
                totalPrice *= 0.9
            }
            break;

    }

    totalPrice = totalPrice.toFixed(2);

    console.log(totalPrice)
}

skiTrip(["2","apartment","positive"])



