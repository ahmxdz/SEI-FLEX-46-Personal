var express = require('express');
var router = express.Router();
const HttpStatusCodes = require('http-status-codes')
const todoDb = require('../models/todo.js')
const todoCtrl = require('../controllers/todos')
/* GET home page. */
// router.get('/', function (req, res) {
//     console.log(req.query)
//     let todos = todoDb.getAll()

//     if (req.query.done != undefined){
//         if (req.query.done == 'true'){
//             todos = todoDb.getAllItemsThatBasedOnDone(true)
//         }else {
//             todos = todoDb.getAllItemsThatBasedOnDone(false)
//         }
//     }
//     res.render('todo', {
//         todos,
//         userName: 'Ahmed'
//     });
// })

router.get('/', function (req, res){
    
    if(req.query.done){
        todoCtrl.renderListOfItemsBasedOnDone(req, res)
    } else {
        todoCtrl.renderAllItems(req, res)
    }
})
router.get('/:todoId', function (req, res) {
    console.log("hitting new route")
    const todoId = req.params.todoId

    const todoItem = todoDb.getAll().find(item => item.id == todoId)
    if (todoItem) {
        res.send(todoItem)
    } else {
        res.status(HttpStatusCodes.NOT_FOUND).send('Todo item with this id does not exist')
    }

})

router.get('/myTodo', function (req, res, next) {
    res.send('Hello world')
});

router.get('/notDone', function (req, res) {
    res.render('todo', {
        todos: todoDb.getAllItemsThatBasedOnDone(false),
        userName: 'Ahmed'
    });
})

router.get('/done', function (req, res) {
    res.render('todo', {
        todos: todoDb.getAllItemsThatBasedOnDone(true),
        userName: 'Ahmed'
    });
})
module.exports = router;
