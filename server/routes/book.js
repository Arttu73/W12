var express = require('express');
var router = express.Router();
const Books = require('../models/Books');

router.post('/api/book', async function(req, res) {
  console.log("posting")
  const name = req.body.name;
  const author = req.body.author;
  const pages = req.body.pages;

  const book = new Books({
    name: name,
    author: author,
    pages: pages
  });
  book.save();
  res.status(200).json("NaM");
});

module.exports = router;