const mongoose = require("mongoose");
const NotificationSchema = mongoose.Schema({
  Booking_Id: String,
  status: String,
  Confirmed_Id: String,
  Matching_Ids: [String],
});

const Notification = mongoose.model("Notification", NotificationSchema);
module.exports = Notification;
