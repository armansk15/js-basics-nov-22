function numbers1Step3(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i)
    }
}

numbers1Step3(["10"])