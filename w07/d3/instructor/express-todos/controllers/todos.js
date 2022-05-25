const Todo = require('../models/todo');

const renderTodoList = (res, todosList, req) => {
    res.render('todos', {
        todosList,
        userName: 'Ashwin',
        time: req.time
    })
}

const renderAllItems = (req, res) => {
    renderTodoList(req, res, Todo.getAll())
}

const renderListOfItemsBasedOnDone = (req, res) => {
    let todosList = Todo.getAll()
    switch (req.query.done) {
        case 'true':
            todosList = Todo.getAllItemsThatBasedOnDone(true)
            break
        case 'false':
            todosList = Todo.getAllItemsThatBasedOnDone(false)
            break
    }

    renderTodoList(req, res, todosList)
}

module.exports = {
    renderAllItems,
    renderListOfItemsBasedOnDone
};
