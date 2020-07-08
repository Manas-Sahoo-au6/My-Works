const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/check-auth-interpreter");
const User = require("../../model/User");
const Interpreter = require("../../model/Interpretor");
const Notification = require("../../model/Notifications");
const Booking = require("../../model/Booking");

router.get("/", authenticate, (req, res) => {
  var count = [];
  Notification.find({ Matching_Ids: req.user.id })
    .exec()
    .then((result) => {
      result.forEach(function (not) {
        if (not.status == "active") {
          count.push(not);
        }
      });
      res.json({
        message: " You can see all available jobs Here ",
        jobs: `Currently ${count.length} job are available`,
        details: count,
      });
    });
});

router.get("/myjobs", authenticate, (req, res) => {
  var count = [];
  Booking.find({ Interpretor_Id: req.user.id })
    .exec()
    .then((result) => {
      result.forEach(function(not){
        if (not.status == "confirmed") {
          count.push(not);
        }
      });
      res.json({
        message: " Here are your confirmed jobs ",
        jobs: `Currently Confirmed jobs  ${count.length} `,
        details: count,
      });
    }).catch(err => res.json({err:err.message}))
});
router.get("/view/:id", authenticate, (req, res) => {
  Notification.findOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (!result)
        return res.json({ error: "Please enter correct Notification id" });
      if (result.status == "confirmed") {
        return res
          .status(404)
          .json({ error: "This Job does not exist Anymore" });
      }
      return result.Booking_Id;
    })
    .then((bookingid) => {
      Booking.findOne({ _id: bookingid })
        .exec()
        .then((bidresult) => {
          if (!bidresult)
            return res.json({ error: "Please enter correct Notification id" });
          if (bidresult.status == "confirmed") {
            return res
              .status(404)
              .json({ error: "This Job does not exist Anymore" });
          }
          return res.json({
            message: "Here are job details",
            details: [
              {
                duration: bidresult.duration,
                client: bidresult.Client_Id,
                from: bidresult.from,
              },
            ],
          });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
    });
});

router.post("/confirm/:id", authenticate, (req, res) => {
  Notification.findOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (!result)
        return res.json({ error: "Please enter correct Notification Id" });
      if (result.status === "active") {
        result.status = "confirmed";
        result.Confirmed_Id = req.user.id;
        result.Matching_Ids = [];
        result.save((err, data) => {
          if (err) return res.status(400).json(err.message);
          if (data) res.json({ Job: "confirmed", details: data });
          console.log(result.Booking_Id);
          const bookingid = result.Booking_Id;

          if (bookingid) {
            Booking.findOne({ _id: bookingid })
              .exec()
              .then((bidresult) => {
                console.log(bidresult);
                if (!bidresult)
                  console.log({
                    error: "Please enter correct Notification id",
                  });
                if (bidresult.status == "confirmed") {
                  console.log({ error: "This Job does not exist Anymore" });
                }
                if (bidresult.status == "Processing") {
                  bidresult.status = "confirmed";
                  console.log("hi", req.user);
                  bidresult.Interpretor_Id = req.user.id;
                  bidresult.save(err, (data) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log(data);
                  });
                }
              })
              .catch((err) => console.log({ error: err.message }));
          }
        });
      } else {
        res.json({ message: "Job Doesnt exist Anymore" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/profile", authenticate, (req, res) => {
  res.json("View Your profile");
});

router.patch("/profile", authenticate, (req, res) => {
  res.json("Edit Your profile");
});

module.exports = router;
