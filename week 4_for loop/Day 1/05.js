function characterSequence(input) {
    let text = input.shift();
    let length = text.length;

    for (let i = 0; i < length; i++) {
        let letter = text[i];
        console.log(letter)
    }
}

characterSequence(["softuni"])