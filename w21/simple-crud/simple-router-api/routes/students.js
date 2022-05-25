//GET /students
//GET /student/:id
//POST /students
//PUT /students/:id
//DELETE /students/:id

const express = require('express')
const router = express.Router()
const studentsCtrl = require('../controllers/students')

router.get('/', studentsCtrl.index)
router.post('/', studentsCtrl.create)

module.exports = router

