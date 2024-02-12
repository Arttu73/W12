var express = require('express');
var router = express.Router();
const Books = require('../models/Books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
router.post('/api/book', async function(req, res) {
  console.log("posting")
  const name = req.body.name;
  const author = req.body.author;
  const pages = req.body.pages;
  try {
    const book = new Books({
      name: name,
      author: author,
      pages: pages
    });
    book.save();
    res.status(200).json("NaM");
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error ' });
  }
});
*/

module.exports = router;
