function numberInRange(input) {
    let userInput = input.shift();

    if (userInput >= -100 && userInput <= 100 && userInput != 0) {
        console.log("Yes")
    } else{
        console.log("No")
    }


}

numberInRange(["0"])