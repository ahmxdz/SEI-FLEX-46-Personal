const mongoose = require('mongoose');

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
const factSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
    googleId: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
