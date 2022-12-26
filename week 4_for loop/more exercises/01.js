function backToThePast(input) {
    let moneyInherited = Number(input.shift());
    let yearsToLive = Number(input.shift());
    let age = 17
    

    for (let i = 1800; i <= yearsToLive; i++) {
        age += 1
        if (i % 2 === 0) {
            moneyInherited -= 12000;
        } else {
            moneyInherited -= 12000 + 50 * age
        }

    }
     if (moneyInherited >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyInherited.toFixed(2)} dollars left.`)
     } else {
        let moneyNeeded = Math.abs(moneyInherited)
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`)
     }
}

backToThePast(["100000.15", "1808"])