const { getAllBooks } = require("../services/book");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getBooks,
};