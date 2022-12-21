function pwGuess(input) {
    let userInput = input[0];

    if (userInput === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

pwGuess(["asd"])