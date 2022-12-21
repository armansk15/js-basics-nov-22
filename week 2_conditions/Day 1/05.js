function number100(input) {
    let userInput = input[0];

    if (userInput < 100) {
        console.log("Less than 100");
    } else if (userInput <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

number100(["101"])