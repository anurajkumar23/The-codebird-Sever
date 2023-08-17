const mongoose = require('mongoose');

const coreTeamSchema = new mongoose.Schema({
  pimg: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  clubPosition: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: Number,
  },
  facebook: {
    type: String,
  },
});

const Team = mongoose.model("Coreteam", coreTeamSchema);

module.exports = Team;
