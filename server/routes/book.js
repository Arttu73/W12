var express = require('express');
var router = express.Router();
const Books = require('../models/Books');

/* GET home page. */
router.post('/api/book', async function(req, res, next) {
  const name = req.body.name;
  const author = req.body.author;
  const pages = req.body.pages;
  try {
    const book = new Books({
      name: name,
      author: author,
      pages: pages
    });
    await book.save();
    res.status(200).json(book);
  } catch(error) {
    res.status(500).json({ error: 'Error occurred when book!' });
  }

});

module.exports = router;