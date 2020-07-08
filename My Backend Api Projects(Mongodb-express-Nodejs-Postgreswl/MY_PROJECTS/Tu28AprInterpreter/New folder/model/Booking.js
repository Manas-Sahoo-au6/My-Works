const mongoose = require("mongoose");
const BookingSchema = mongoose.Schema({
  Interpretor_Id: String,
  status: String,
  from: { type: Date, default: Date.now },
  duration: Number,
  Client_Id: String,
  Matching_Ids: [String],
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
