function booksToRead(input) {
   let currPages = Number(input[0]);
   let pagesHourly = Number(input[1]);
   let daysToRead = Number(input[2]);

   let amountTotal = currPages / pagesHourly;
   let amountHourly = amountTotal / 2;

   console.log(amountHourly);
}
