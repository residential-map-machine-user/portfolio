var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('requested');
    res.render('index', { body: marked(data.toString())});
  // fs.readFile(__dirname + '/../markdowns/introduction.md', function(err, data){
  //   if (err){
  //     throw err;
  //   } 
  // });
});

module.exports = router;
