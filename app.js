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
var event_que=require('./routes/event_que');
var quedetails=require('./routes/quedetails');
var ansdetails=require('./routes/ansdetails');
var offer=require('./routes/offer');
var payment=require('./routes/payment');
var approvevnet=require('./routes/approvevent');
var testimonial=require('./routes/testimonial');
var like=require('./routes/like');
var ticketcnt=require('./routes/ticketcnt');
var test=require('./routes/testdetails');
var comment=require('./routes/comment');
var userjoin=require('./routes/userdetails');
var venuejoin=require('./routes/venuedetails');
var walletjoin=require('./routes/walletdetails');
var paymentjoin=require('./routes/paymentdetails');
var disapprove=require('./routes/disapprove');
var ansget=require('./routes/ansget');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/ansget',ansget);
app.use('/users', users);
app.use('/cities',cities);
app.use('/cat',cat);
app.use('/approvevent',approvevnet);
app.use('/venue',venue);
app.use('/wallet',wallet);
app.use('/event',event);
app.use('/ans',ans);
app.use('/comment',comment);
app.use('/book',book);
app.use('/quedetails',quedetails)
app.use('/event_que',event_que);
app.use('/offer',offer);
app.use('/payment',payment);
app.use('/testimonial',testimonial);
app.use('/ticketcnt',ticketcnt);
app.use('/ansdetails',ansdetails);
app.use('/test',test);
app.use('/like',like);
app.use('/userdetails',userjoin);
app.use('/venuedetails',venuejoin);
app.use('/walletdetails',walletjoin);
app.use('/paymentdetails',paymentjoin);
app.use('/disapprovedetails',disapprove);


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
