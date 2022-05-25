const e = require('express');
var express = require('express');
var router = express.Router();
const HttpStatusCodes = require('http-status-codes')

const todoDb = require('../models/todo.js');
const todoCtrl = require('../controllers/todos')


/* GET home page. */
// router.get('/', function (req, res) {
//     // Query params allow us to scale our route
//     console.log(req.query)

//     let todosList = todoDb.getAll()

//     if (req.query.done !== undefined) {
//         switch (req.query.done) {
//             case 'true':
//                 todosList = todoDb.getAllItemsThatBasedOnDone(true)
//                 break
//             case 'false':
//                 todosList = todoDb.getAllItemsThatBasedOnDone(false)
//                 break
//         }
//     }
    
//     res.render('todos', {
//         todosList,
//         userName: 'Ashwin'
//     });
// })

router.get('/', function (req, res) {
    console.log('time')
    console.log(req.time)
    if (req.query.done) {
        todoCtrl.renderListOfItemsBasedOnDone(req, res)
    } else {
        todoCtrl.renderAllItems(req, res)
    }
})

router.get('/:todoId', function (req, res) {
    console.log('Hitting new route')
    console.log(req.params)
    const todoId = req.params.todoId

    const todoItem = todoDb.findById(todoId)

    if (todoItem) {
        res.send(todoItem)
    } else {
        res.status(HttpStatusCodes.NOT_FOUND).send('Todo item with this id does not exist')
    }
})

router.delete('/:todoId', function (req, res, next) {
    console.log('delete route hit')
    res.send('Deleted')
})

router.post('/:todoId', function (req, res, next) {
    // Add this record to db
    res.send('Posted')
})


router.get('/myTodo', function (req, res, next) {
    res.send('Hello world')
});

router.get('/notDone', function (req, res) {
    res.render('todos', {
        todosList: todoDb.getAllItemsThatBasedOnDone(false),
        userName: 'Ashwin'
    });
})

router.get('/done', function (req, res) {
    res.render('todos', {
        todosList: todoDb.getAllItemsThatBasedOnDone(true),
        userName: 'Ashwin'
    });
})

module.exports = router;
