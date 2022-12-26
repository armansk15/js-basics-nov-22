function multiplicationTable(input) {
    let n = Number(input.shift());
    let result;

    for (let i = 1; i <= 10; i++) {
        result = i * n
        console.log(`${i} * ${n} = ${result}`)
    }

    
}

multiplicationTable(["5"])