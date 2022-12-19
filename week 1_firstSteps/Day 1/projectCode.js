function projectCode(input) {
    let name = input[0];
    let projects = input[1];
    let hours = projects * 3

    let sntc = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`;
    console.table(sntc);
}

