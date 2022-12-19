function calculatorDeposits(input) {
    let depAmount = Number(input[0]);
    let depTerm = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);
    
    let yearlyInterestDecimal = yearlyInterestRate / 100;
    
    let sum = depAmount + depTerm * ((depAmount * yearlyInterestDecimal) / 12);

    console.log(sum);
}

calculatorDeposits(["200","3","5.7"]);

