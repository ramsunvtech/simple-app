var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome to Message Board',
    meta: {
      description: 'Social Message Board App',
      author: 'Venkatraman Ramamoorthy'
    },
    css: [
    'css/bootstrap.min.css',
    'css/themes.css',
    'css/message-board.css'
    ]
  });
});

module.exports = router;
