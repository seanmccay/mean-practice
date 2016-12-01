var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I guess this is where we put together some JSON or something to' +
  'send back... Or maybe this throws up a web page.');
});

module.exports = router;
