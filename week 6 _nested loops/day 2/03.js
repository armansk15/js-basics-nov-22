function sumPrimeNonPrime(input) {
  let index = 0;
  let sum = input[index];
  index++;

  let primeSum = 0;
  let nonPrimeSum = 0;

  while (sum !== "stop") {
    sum = Number(sum);

    let isPrime = true;

    if (sum < 0) {
      console.log("Number is negative.");
      sum = input[index];
      index++;

      continue;
    }

    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      primeSum += sum;
    } else {
      nonPrimeSum += sum;
    }

    sum = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
