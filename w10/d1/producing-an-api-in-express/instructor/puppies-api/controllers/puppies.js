const Puppy = require('../models/puppy');

function index(req, res) {
  Puppy.find({}).then((puppies) => res.status(200).json(puppies));
}

function create(req, res) {
  Puppy.create(req.body)
    .then((puppy) => res.status(201).json(puppy))
    .catch((err) => res.status(500).json(err));
}
function show(req, res) {
  Puppy.findById(req.params.id).then((puppy) => res.status(200).json(puppy));
}
function deleteOne(req, res) {
  Puppy.findByIdAndRemove(req.params.id).then((puppy) => {
    res.status(200).json({});
  });
}

function update(req, res) {
  // find the puppy to update
  // capture the new data coming in
  // modify and save at the same time
  const puppyId = req.params.id;
  const updateData = req.body;
  Puppy.findByIdAndUpdate(puppyId, updateData, { new: true }).then((puppy) => res.status(200).json(puppy));
}

module.exports = {
  index,
  create,
  show,
  delete: deleteOne,
  update,
};
