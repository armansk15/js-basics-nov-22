function oldBooks(input) {
  let index = 0;
  let bookSearched = input[index];
  index++;
  let currentBook = input[index];
  index++
  let booksCount = 0;

  while (currentBook !== "No More Books") {
    if (currentBook === bookSearched) {
      console.log(`You checked ${booksCount} books and found it.`);
      return;
    }
    booksCount++;
    currentBook = input[index];
    index++;
  }
  console.log(`The book you search is not here!`)
  console.log(`You checked ${booksCount} books.`)
}

oldBooks([
    "Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
])



