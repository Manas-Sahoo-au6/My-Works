const mongoose = require("mongoose");
const InterpretorSchema = mongoose.Schema({
  email: String,
  password: String,
  status: String,
  region: String,
  firstName: String,
  lastName: String,
  language: [String],
  Registered: String,
  Background: String,
  Expertise: String,
  vcode:Number,
  passwordTrack: [String],
});

const Interpretor = mongoose.model("Interpretor", InterpretorSchema);
module.exports = Interpretor;
