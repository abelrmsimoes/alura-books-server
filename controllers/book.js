function getBooks(req, res) {
  try {
    res.send("Get all books");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getBooks,
};