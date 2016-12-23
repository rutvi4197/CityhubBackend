var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var cities=require('./routes/cities');
var cat=require('./routes/cat');
var venue=require('./routes/venue');
var wallet=require('./routes/wallet');
var event=require('./routes/event');
var ans=require('./routes/ans');
var book=require('./routes/book');
<<<<<<< HEAD
var event_que=require('./routes/event_que');

var offer=require('./routes/offer');
var payment=require('./routes/payment');
var testimonial=require('./routes/testimonial');
=======
var like=require('./routes/like');
>>>>>>> 7f7b76dded6fc3cc803bfeba92aaba2cb912b055
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/cities',cities);
app.use('/cat',cat);
app.use('/venue',venue);
app.use('/wallet',wallet);
app.use('/event',event);
app.use('/ans',ans);
app.use('/book',book);
<<<<<<< HEAD
app.use('/event_que',event_que);
app.use('/offer',offer);
app.use('/payment',payment);
app.use('/testimonial',testimonial);
=======
app.use('/like',like);
>>>>>>> 7f7b76dded6fc3cc803bfeba92aaba2cb912b055

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
