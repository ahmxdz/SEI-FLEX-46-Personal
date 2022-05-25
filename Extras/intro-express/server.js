const express = require('express')
const path = require('path')
const todoDb = require('./data/todo-db')


const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about')
})

let data = {myVariable: todoDb.getAll()}

app.get('/todos', function(req,res){
    res.render('todos/index', data)
})

app.listen(5050, function() {
    console.log('Listening on port 5050')
})