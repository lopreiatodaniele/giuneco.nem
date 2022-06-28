const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    required: true,
  },
  petRace: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Pet', petSchema);
