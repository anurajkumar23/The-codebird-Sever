const mongoose = require("mongoose");

const eventApplySchema = new mongoose.Schema({
  name: { type: String, require: true },
  eventName: { type: String, require: true }
});

const AppliedStudents = mongoose.model("AppliedStudents", eventApplySchema);

module.exports = AppliedStudents;
