const Student = require('../models/student');

module.exports = {
  index,
  addFact,
  delFact,
};

function index(req, res, next) {
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  const modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
  // Default to sorting by name
  const sortKey = req.query.sort || 'name';
  Student.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, students) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('students/index', {
        students,
        name: req.query.name,
        sortKey,
      });
    });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user
    .save()
    .then(() => res.redirect('/students'))
    .catch((err) => res.redirect('/students'));
}

function delFact(req, res, next) {
  Student.findOne({ 'facts._id': req.params.id })
    .then((student) => {
      student.facts.id(req.params.id).remove();
      return student.save();
    })
    .then(() => res.redirect('/students'))
    .catch(() => res.redirect('/students'));
}
