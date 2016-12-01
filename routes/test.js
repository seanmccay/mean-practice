var express = require('express');
var router = express.Router();

/* This is just some test page to see if I know how to create a new route */
router.get('/', function(req, res, next) {
    res.render('test', {message: "Hey! You made it to the test page by following a link. " +
    "Good stuff."});
});

module.exports = router;

/* does this mean that I just created a Node module? */