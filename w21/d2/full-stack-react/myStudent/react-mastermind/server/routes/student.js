const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller')

router.get('/', (req, res) => {
    studentController.getAllStudents(req, res)

})

router.post('/', (req, res) => {
    studentController.createNewStudent(req, res)
  })

module.exports = router;