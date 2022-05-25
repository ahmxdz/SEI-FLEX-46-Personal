const Student = require('../models/student')

function index(req, res){
    Student.find({}, function(err, students){
        res.json(students)
    })
}

function create(req, res){
    const student = new Student(req.body)
    student.save(function(err){
        if(err){
            throw err
        }
        res.json(student)
    })
}


module.exports = {
    index,
    create
}