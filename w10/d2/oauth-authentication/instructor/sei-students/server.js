const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// load the env vars
require('dotenv').config();
const methodOverride = require('method-override');

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const indexRoutes = require('./routes/index');
const studentsRoutes = require('./routes/students');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// where we mount passport matters a lot!!! has to be AFTER the sessions AND above any routes that call req.user
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/', studentsRoutes);

// invalid request, send 404 page
app.use(function (req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
