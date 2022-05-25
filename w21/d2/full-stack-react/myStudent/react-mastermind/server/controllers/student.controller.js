const Student = require('../models/Student')

const getAllStudents = (req, res) => {
    res.send({
        status: 200,
        data: [
          {firstName: 'Deo', lastName: 'DeosLastName'},
          {firstName: 'George', lastName: 'Haddad'},
          { firstName: 'Raj', lastName: 'Shah' },
          {firstName: 'Jessica', lastName: 'Nguyen'}
        ]
    })
}

const createNewStudent = async(req, res) => {
  console.log(req.body)

  await Student.create(req.body)

  res.send({
    status: 200,
    data: 'I have hit my post endpoint2'
  })
}

module.exports = {
  getAllStudents,
  createNewStudent
}