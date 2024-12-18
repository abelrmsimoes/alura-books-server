const { getAllBooks, getBookById, addBook, modifyBook, removeBook } = require("../services/book");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    const book = getBookById(id);
    res.send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    addBook(newBook)
    res.status(201).send("Book added successfully");
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    modifyBook(body, id)
    res.status(200).send("Book updated successfully");
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    removeBook(id)
    res.status(200).send("Book deleted successfully");
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook
};