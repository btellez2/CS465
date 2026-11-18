var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const path = require('path');

const pages = ['rooms', 'meals', 'news', 'about', 'contact'];

for (const page of pages) {
    router.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', `${page}.html`));
    });
}
