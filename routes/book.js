const { Router } = require('express');
const { getBooks } = require('../controllers/book');

const router = Router();

router.get("/", getBooks)

router.post("/", (req, res) => {
  res.send("Create a book");
})

router.patch('/', (req, res) => {
  res.send("Update a book");
})

router.delete('/', (req, res) => {
  res.send("Delete a book");
})

module.exports = router;