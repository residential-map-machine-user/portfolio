var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('requested');
  fs.readFile(__dirname + '/../markdowns/introduction.md', function(err, data){
    if (err){
      throw err;
    } 
    res.render('index', {});
  });
});

module.exports = router;
