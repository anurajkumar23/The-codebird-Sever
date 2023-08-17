const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  date: { type: String, require: true },
  registrationDate: { type: String, require: true },
  mode: { type: String, require: true },
  poster: { type: String, require: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;