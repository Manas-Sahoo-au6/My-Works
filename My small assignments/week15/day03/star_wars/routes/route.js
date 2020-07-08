const express = require("express");
var router = express.Router();

var { home } = require("../controller/controller");
router.get("/home", home);

module.exports = router;
