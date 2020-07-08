var express = require("express");
var hbs = require("hbs");
var path = require("path");
var methodOverride = require("method-override");
var session = require("express-session");
require("./utils/hbs");
require("./db");

// Routes of both API as well as normal
var todoAPIRoutes = require("./routes/apiRoutes/todoApiRoutes");
var userAPIRoutes = require("./routes/apiRoutes/userApiRoutes");
var todoNormalRoutes = require("./routes/normalRoutes/todoNormalRoutes");
var userNormalRoutes = require("./routes/normalRoutes/userNormalRoutes");

// Init
var app = express();

// Setting HBS as template engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views", "pages"));
app.set("view options", { layout: "layout" });

// Registering hbs partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Having user form body parsed
app.use(express.urlencoded({ extended: false }));

// Adding custom request type override query key name
app.use(methodOverride("cadbury"));
//jwt
// Adding the session capabilities
//cors
app.use(
  session({
    secret: "todosAPIexpressappsecret",
    resave: false,
    name: "todoSession",    //cookies users jwtt algoith + 
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    }
  })
);

app.use(userNormalRoutes);
app.use(todoNormalRoutes);
app.use(userAPIRoutes);
app.use(todoAPIRoutes);

app.get("/", function(req, res) {
  return res.render("index", {
    title: "Home page",
    userId: req.session.userId
  });
});

app.listen(1234, function() {
  console.log("Server started");
});
