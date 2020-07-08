var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Password Management system " });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Password Management system " });
});

router.get("/passwordCategory", function (req, res, next) {
  res.render("password_category", { title: "Password Management system " });
});

router.get("/addNewCategory", function (req, res, next) {
  res.render("add_new_category", { title: "Add New Category " });
});

router.get("/addNewPassword", function (req, res, next) {
  res.render("add-new-password", { title: "Add New Password " });
});

router.get("/passwordDetails", function (req, res, next) {
  res.render("view-all-password", { title: "Add New Password " });
});

module.exports = router;
