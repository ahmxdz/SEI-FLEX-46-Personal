const Todo = require('../models/todo');

function allTodos(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
  });
}

function show(req, res) {
  console.log(req.params);
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
  });
}

module.exports = {
  index: allTodos,
  show,
};
