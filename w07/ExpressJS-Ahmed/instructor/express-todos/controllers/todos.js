
const Todo = require('../models/todo');

const renderTodoList = (res, todo) => {
    res.render('todo', {
        todos,
        userName: 'Ahmed'
    })
}
const renderAllItems = (req, res) => {
    let todos = Todo.getAll()
    res.render('todos', {
      todos,
      userName: 'Ahmed'
    });
};
const renderListOfItemsBasedOnDone = (req, res) => {
    let todos = Todo.getAll()
    switch (req.query.done) {
        case 'true':
            todos = Todo.getAllItemsThatBasedOnDone(true)
            break
        case 'false':
            todos = Todo.getAllItemsThatBasedOnDone(false)
            break
    }
    renderTodoList(res, todos)
}


module.exports = {
    renderAllItems,
    renderListOfItemsBasedOnDone
  };
  
