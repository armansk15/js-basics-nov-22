function pipesInPool(input) {
  let volume = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let hours = Number(input[3]);

  let firstPipe = p1 * hours;
  let secondPipe = p2 * hours;

  let waterTotal = firstPipe + secondPipe;

  if (volume >= waterTotal) {
    let poolPercent = (waterTotal / volume) * 100;
    let firstPipePercent = (firstPipe / waterTotal) * 100;
    let secondPipePercent = (secondPipe / waterTotal) * 100;
    console.log(
      `The pool is ${poolPercent.toFixed(
        2
      )}% full. Pipe 1: ${firstPipePercent.toFixed(
        2
      )}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`
    );
  } else {
    let overflow = waterTotal - volume;
    console.log(
      `For ${hours} hours the pool overflows with ${overflow} liters.`
    );
  }
}

pipesInPool([
  "100",
  "100",
  "100",
  "2.5"
])
