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
app.get('/call', function (req, res) {
  var client = require('twilio')( "AC3c08a8aa6a616c4b70dadb3e0ba98175", "e0dd7f2795760d32ec1b859309fe2746");
  var twilio = require('twilio');
  var resp = new twilio.TwimlResponse();

  resp.say('Welcome to Twilio!');
  resp.say('Please let us know if we can help during your development.', {
      voice:'woman',
      language:'en-gb'
  });

  console.log(resp.toString());
  client.makeCall({
      to:"+819052330123", // Any number Twilio can call
      from: "+815031595871", // A number you bought from Twilio and can use for outbound communication
      url:   "https://demo.twilio.com/welcome/voice/ja/"
      // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {
  console.log(err);
  //executed when the call has been initiated.
  console.log(responseData.from); // outputs "+14506667788"

  });

})
app.use('/users', users);
app.use('/message', function (req, res) {
  res.render('message.html', {});
})
app.use('/order', function (req, res) {
  res.render('order.html', {});
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
app.use('/detail/kimono', function (req, res) {
		res.render('kimono_detail.html', {});
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
