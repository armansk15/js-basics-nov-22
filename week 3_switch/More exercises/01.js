function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let groupTotal = Number(input[2]);
    let ticketPrice = 0;
    let ticketTotal = 0;

    if (groupTotal <= 4) {
        budget *= 0.25
    } else if (groupTotal <= 9) {
        budget *= 0.4
    } else if (groupTotal <= 25) {
        budget *= 0.5
    } else if (groupTotal <= 49) {
        budget *= 0.6
    } else {
        budget *= 0.75
    }

    if (category === "Normal") {
        ticketPrice = 249.99
    } else if (category === "VIP") {
        ticketPrice = 499.99
    }

    ticketTotal = groupTotal * ticketPrice;

    if (budget >= ticketTotal) {
        console.log(`Yes! You have ${(budget - ticketTotal).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(ticketTotal - budget).toFixed(2)} leva.`)
    }

 }

 matchTickets([
    "30000",
    "VIP",
    "49"
 ])