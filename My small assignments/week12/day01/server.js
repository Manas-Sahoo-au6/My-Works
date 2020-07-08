var express = require("express");
var session = require("express-session");
var path = require("path");

var userRoutes = require("./routes/userRoutes");
var app = express();
app.set("view engine", "hbs");
app.use(express.json());
app.use(userRoutes);
app.listen(8080);
