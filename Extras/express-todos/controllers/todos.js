var todoDb = require('../models/todo')


function index(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  }

function show(req, res) {
    // console.log(req)
    res.render('todos/show', {
        todo: todoDb.getOne(req.params.ourVariable)
    })
}

function showAllMovies(req, res) {
  console.log('showAllMovies function ran!')
  res.send('<h1>Hello</h1>')
}

  module.exports = {
      index,
      show,
      showAllMovies
  }