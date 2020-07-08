var express = require("express");
var session = require("express-session");
var methodOverride = require("method-override");
var middlewares = require("../middlewares/middleware");
var fs = require("fs");
var path = require("path");
var userJSONPath = path.join(__dirname, "../", "users.json");
var uuid = require("uuid/v4");

var router = express.Router();

// Form body accepting/parsing setting
router.use(express.urlencoded({ extended: false }));

// Method overriding for accepting DELETE request
router.use(methodOverride("_method"));

router.use(
  session({
    name: "users",
    secret: "manas",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 10,
      secure: false
    }
  })
);

router.get("/", function(req, res) {
  res.send("Welcome");
});
router.get("/register", function(req, res) {
  const formString1 = `
      <form action='/register' method='POST'>
        <input required type='name' name='name' placeholder='Enter your name' />
        <input required type='email' name='email' placeholder='Enter your email' />
        <input required type='password' name='password' placeholder='Enter your password' />
        <input type='submit' value='register' />
      </form>
    `;
  res.send(formString1);
});
router.post("/register", function(req, res) {
  var id = uuid();
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  fs.readFile(userJSONPath, { encoding: "utf-8" }, function(err, users) {
    console.log(users);
    var usersJavascript = JSON.parse(users);
    var userObj = {
      id: id,
      name: name,
      email: email,
      password: password
    };
    req.session.userId = userObj.id;
    console.log(userObj);
    usersJavascript.push(userObj);
    var usersJSON = JSON.stringify(usersJavascript);
    fs.writeFile("./users.json", usersJSON, function() {});

    return res.redirect("/dashboard");
  });
});
router.get("/login", function(req, res) {
  const formString = `
    <form action='/login' method='POST'>
      <input required type='email' name='email' placeholder='Enter your email' />
      <input required type='password' name='password' placeholder='Enter your password' />
      <input type='submit' value='Login' />
    </form>
  `;
  res.send(formString);
});

router.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (!email || !password) return res.redirect("/login");
  fs.readFile(userJSONPath, { encoding: "utf-8" }, function(err, users) {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
    var usersJavascript = JSON.parse(users);
    var user = usersJavascript.find(function(user) {
      return user.email === email && user.password === password;
    });
    if (!user) return res.redirect("/login");
    req.session.userId = user.id;
    return res.redirect("/dashboard");
  });
});
router.get("/dashboard", middlewares.authenticate, function(req, res) {
  // console.log(middlewares.users())
  fs.readFile(userJSONPath, { encoding: "utf-8" }, function(err, users) {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
    var usersJavascript = JSON.parse(users);
    var user = usersJavascript.find(function(users) {
      return req.session.userId === users.id;
    });
    var dashboard = `
    <h1>Hello ${user.name}</h1>
    <form method='POST' action='/logout?_method=DELETE'>
      <input type='submit' value='Logout' />
    </form>
  `;
    res.send(dashboard);
  });
});

router.delete("/logout", function(req, res) {
  req.session.destroy();
  return res.redirect("/login");
});
