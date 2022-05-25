var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todos');
const { moveMessagePortToContext } = require('worker_threads');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// An example of a middleware
// this prints out the current date every time a request is called
app.use(function (req, res, next) {
  console.log('request came in at ', new Date())
  // res.send('This is SEI')
  next()
})

app.use(function (req, res, next) {
  req.time = new Date().toLocaleTimeString()
  next()
})

// middleware for /todos
app.use('/todos', function (req, res, next) {
  console.log('middleware for todos')
  next()
})

// Series of middlewares
app.use(function (req, res, next) {
  console.log('fist middleware - A')
  next()
  console.log('fist middleware - B')
})

app.use(function (req, res, next) {
  console.log('second middleware - A')
  next()
  console.log('second middleware - B')
})

//an example of middleware
//this prints out the current date everytime a requst is called
app.use(function(req, res, next){
  console.log('request came n at', new Date())
  res.send('this is SEI')
  next()
})

app.use(function(req, res, next){
  req.time = new Date().toLocaleTimeString
  next()
})
app.use('/', indexRouter);
app.use('/ashwin2', indexRouter)
app.use('/users', usersRouter)
app.use('/todos', todoRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('Route does not exist')
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
