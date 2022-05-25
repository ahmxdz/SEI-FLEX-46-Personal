//Load Express
const express = require('express')
const HttpStatusCodes = require('http-status-codes')
const path = require('path')
const todoDb = require('./data/todo-data')

//Create our express app
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Root Route directly to an app
app.get('/ahmed', function(req, res){

    res.send('<h1>Hello World!!</h1>')
})
app.get('/raj', (req, res) => {
    // res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Say Hello')
    res.redirect('/han')
})
app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });

app.get('/han', (req, res) => { 
    res.status(HttpStatusCodes.OK).send({
        data: {
            name: 'Han',
            city: "Calgary"
        },
        message: "This data exists"
    })
})
app.get('/home', function(req, res){
    res.render('home')
    })



app.listen(3000, function(){
    console.log('App started up in port 3000')
})