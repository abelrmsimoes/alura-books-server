const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"));
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));
  return books.find((book) => book.id == id);
}

function addBook(newBook) {
  const books = JSON.parse(fs.readFileSync("books.json"));
  const newBooksList = [ ...books, newBook]

  fs.writeFileSync("books.json", JSON.stringify(newBooksList))
}

function modifyBook(changes, id) {
  let books = JSON.parse(fs.readFileSync("books.json"));
  const bookIndex = books.findIndex(book => book.id == id)

  const currentChanges = { ...books[bookIndex], ...changes }

  books[bookIndex] = currentChanges
  fs.writeFileSync("books.json", JSON.stringify(books))
}

function removeBook(id) {
  let books = JSON.parse(fs.readFileSync("books.json"));
  books = books.filter(book => book.id != id)
  fs.writeFileSync("books.json", JSON.stringify(books))
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  modifyBook,
  removeBook
};