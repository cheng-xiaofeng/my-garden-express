var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');
const mongoose = require('mongoose')
const routeFun = require('./routes')

var app = express();
mongoose.connect('mongodb://localhost/first_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('连接成功')
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.header("Access-Control-Allow-Origin",'http://localhost:3001' || 'http://localhost:3000' || 'http://localhost:3002');
  //允许的header类型
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true)
  next()
});
routeFun(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
