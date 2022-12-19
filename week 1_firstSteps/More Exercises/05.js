function trainingLab(input) {
  let height = Number(input[0]);
  let width = Number(input[1]);

  let heightInCm = height * 100;
  let widthInCm = width * 100;

  let totalW = Math.trunc((widthInCm - 100) / 70);
  let totalH = Math.trunc(heightInCm / 120);

  let totalSpace = totalH * totalW - 3;

  console.log(totalSpace);
}

trainingLab(["8.4", "5.2"]);
