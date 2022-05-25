// load Express
const express = require('express');
const path = require('path');

// require the FAKE todo "database"
const todoDb = require('./data/todo-db');
// Create an express app (our server)
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setup a route --> first route is called the root route

// the callback inside the route definition is called a route handler
app.get('/', function (req, res) {
  console.log(req);
  // we need to handle the http request
  // render some template (ie: html)
  res.redirect('/home'); // your telling the browser to load /home !!!route!!
});

// TODOS ROUTE
app.get('/todos', function (req, res) {
  res.render('todos/index', { todos: todoDb.getAll() });
});

app.get('/home', function (req, res) {
  res.render('home');
});

// TREST IT OUT
app.get('/cars', function (req, res) {
  res.send("Here's a list of my cars...");
});

app.post('/cars', function (req, res) {
  res.send('Thanks for the new car!');
});

// tell the express app to work on a specific port (ie: listen)
// forwards all http/network traffic over to our express app via the port

app.listen(3000, function () {
  console.log('Listening on Port 3000 - Express app running');
});
