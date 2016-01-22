var express = require('express');
var router = express.Router();

/* Post New Message. */
router.post('/new', function(req, res, next) {
  var postRequest = req.body,
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today = new Date(),
      postingDate = monthNames[ today.getMonth() ] + ' ' + today.getDate() + ', ' + today.getFullYear();

    res.json({
      postId: 1,
      userName: postRequest.userName,
      desc: postRequest.desc,
      postedDate: postingDate
    });

/*  res.status(401).json({
    message: 'Invalid post'
  });*/
});

router.get('/', function(req, res, next) {
  var postRequest = req.body,
      status = postRequest.status;

  res.json({
    "postList": [{
        postId: 1,
        userName: 'Venkat',
        desc: 'Migrating from Bootstrap 2.x to 3 is not a simple matter of swapping out the JS and CSS files. Bootstrap 3 is a major overhaul, and there are a lot of changes from Bootstrap 2.x. This guidance is intended to help 2.x developers transition to 3.',
        postedDate: 'Oct 22, 2015'
      },
      {
        postId: 2,
        userName: 'Ramsun',
        desc: 'Ramsun Migrating from Bootstrap 2.x to 3 is not a simple matter of swapping out the JS and CSS files. Bootstrap 3 is a major overhaul, and there are a lot of changes from Bootstrap 2.x. This guidance is intended to help 2.x developers transition to 3.',
        postedDate: 'Oct 23, 2015'
    }]
  });
/*  res.status(401).json({
    message: 'Invalid post'
  });*/
});

module.exports = router;
