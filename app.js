var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var marked = require('marked');
var Qiita = require('qiita-js');
var fs = require('fs');
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/works', function (req, res) {
	res.render('works.html', { })
});
app.get('/self', function (req, res) {
	res.render('self.html',{})
});
app.use('/', routes);
app.use('/users', users);
app.use('/message', function (req, res) {
		res.render('message.html', {});
})
app.use('/detail/dokopro', function (req, res) {
		res.render('dokopro_detail.html', {});
})
app.use('/detail/livedoor', function (req, res) {
		res.render('livedoor_detail.html', {});
})
app.use('/detail/markdown', function (req, res) {
		res.render('markdown_detail.html', {});
})
app.use('/detail/sens', function (req, res) {
		res.render('sens_detail.html', {});
})
app.use('/detail/drawer', function (req, res) {
		res.render('drawer_detail.html', {});
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
