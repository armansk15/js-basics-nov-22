function cake(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let cakeMeasure = width * length;
  let cakesEaten = input[index]
  index++
  let cakesEatenTotal = 0;
  let cakesLeft = cakeMeasure
  

  while(cakesEaten !== "STOP") {
    cakesEaten = Number(cakesEaten)
    cakesLeft -= cakesEaten
    cakesEatenTotal += cakesEaten

    if(cakesLeft <= 0) {
        console.log(`No more cake left! You need ${cakesEatenTotal - cakeMeasure} pieces more.`)
        return;
    }
    cakesEaten = input[index];
    index++
  }
  console.log(`${cakeMeasure - cakesEatenTotal} pieces are left.`)
}

cake([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
])


