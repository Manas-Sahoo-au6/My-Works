const mongoose = require("mongoose");
var Schema = mongoose.Schema;
//defining the structure of the fish table
var fishSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: Number, default: 1.5 }
});
var Fish = mongoose.model("fish", fishSchema);
module.exports = Fish;
