const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/check-auth-user");
const User = require("../../model/User");
const Interpreter = require("../../model/Interpretor");
const Booking = require("../../model/Booking");
const Notification = require("../../model/Notifications");
const search = require("../../middleware/interpretor-search");

router.get("/", authenticate, search, (req, res) => {
  res.json({
    message: `Found ${req.length} Interpreters`,
    details: req.details,
    info: "Visit /Book to make a booking at a time",
  });
});
router.post("/book", authenticate, search, (req, res) => {
  //from: req.body.time,
  //console.log(req.user.id)
  const matching = [];
  req.details.forEach(function (x) {
    matching.push(x._id);
  });
  const booking = new Booking({
    status: "Processing",
    duration: req.body.duration,
    Client_Id: req.user.id,
    Matching_Ids: matching,
  });
  booking
    .save()
    .then((result) => {
      res.json({
        message: "Booking Successfull , Awaiting Job Acceptance",
        status: result.status,
      });
      return result;
    })
    .then((result) => {
      const notification = new Notification({
        status: "active",
        Booking_Id: result._id,
        Matching_Ids: matching,
      });
      return notification;
      console.log(notification);
    })
    .then((notification) => {
      notification.save((err, data) => {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
    })
    .catch((err) => {
      console.log({ error: err });
    });
  console.log(booking);
});
router.get("/mybookings", authenticate, (req, res) => {
  var confirmed = [];
  var processing = [];
  Booking.find({ Client_Id: req.user.id })
    .exec()
    .then((result) => {
      result.forEach(function (not) {
        if (not.status == "confirmed") {
          confirmed.push(not);
        }
      });
      result.forEach(function (not) {
        if (not.status == "Processing") {
          processing.push(not);
        }
      });
      res.json({
        messagec: " Here are your confirmed Bookings` ",
        jobsc: `Total Confirmed Bookings  ${confirmed.length} `,
        detailsc: confirmed,
        message: " Here are your unconfirmed Bookings` ",
        jobs: `Total Unconfirmed Bookies  ${processing.length} `,
        details: processing,
      });
    })
    .catch((err) => res.json({ err: err.message }));
});
router.get("/profile", authenticate, (req, res) => {
  res.json("View Your profile");
});

router.patch("/profile", authenticate, (req, res) => {
  res.json("Edit Your profile");
});
module.exports = router;
