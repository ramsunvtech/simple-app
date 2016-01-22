var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  var loginRequest = req.body,
      userName = loginRequest.username,
      passWord = loginRequest.password;

  res.json({
    name: 'John Antony',
    email: 'john@gmail.com',
    password: 'linking123'
  });
/*  res.status(401).json({
    message: 'Invalid login'
  });*/
});

module.exports = router;
