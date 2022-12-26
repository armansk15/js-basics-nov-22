function histogram(input) {
  let nWhole = Number(input.shift());
  let currentNum;

  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;

  for (let i = 0; i < nWhole; i++) {
    currentNum = input[i];

    if (currentNum < 200) {
        p1Count++
    } else if (currentNum < 400) {
        p2Count++
    } else if (currentNum < 600) {
        p3Count++
    } else if (currentNum < 800) {
        p4Count++
    } else {
        p5Count++
    }
  }

  let p1Percent = (p1Count / nWhole) * 100
  let p2Percent = (p2Count / nWhole) * 100
  let p3Percent = (p3Count / nWhole) * 100
  let p4Percent = (p4Count / nWhole) * 100
  let p5Percent = (p5Count / nWhole) * 100

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}

histogram(["7","800","801","250","199","399","599","799"])


