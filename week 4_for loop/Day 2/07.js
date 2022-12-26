function trekkingMania(input) {
  let groupCount = Number(input[0]);
  let numberGroupCount = 0;
  let totalPeopleCount = 0;
  let moussala = 0;
  let monblanc = 0;
  let klmndjro = 0;
  let k2 = 0;
  let everest = 0;

  for (let i = 1; i < input.length; i++) {
    numberGroupCount = Number(input[i]);
    totalPeopleCount += numberGroupCount;

    if (numberGroupCount <= 5) {
      moussala += numberGroupCount;
    } else if (numberGroupCount <= 12) {
      monblanc += numberGroupCount;
    } else if (numberGroupCount <= 25) {
      klmndjro += numberGroupCount;
    } else if (numberGroupCount <= 40) {
      k2 += numberGroupCount;
    } else {
      everest += numberGroupCount;
    }
  }

  let moussalaPercent = (moussala / totalPeopleCount) * 100;
  let monblancPercent = (monblanc / totalPeopleCount) * 100;
  let klmndjroPercent = (klmndjro /totalPeopleCount) * 100;
  let k2Percent = (k2 /totalPeopleCount) * 100;
  let everestPercent = (everest /totalPeopleCount) * 100;

  console.log(`${moussalaPercent.toFixed(2)}%`);
  console.log(`${monblancPercent.toFixed(2)}%`);
  console.log(`${klmndjroPercent.toFixed(2)}%`);
  console.log(`${k2Percent.toFixed(2)}%`);
  console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

