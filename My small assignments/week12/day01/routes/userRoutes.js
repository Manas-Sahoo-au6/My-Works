var express = require("express");
var session = require("express-session");
var methodOverride = require("method-override");
var middlewares = require("../middlewares/middleware");
var fs = require("fs");
var path = require("path");
var userJSONPath = path.join(__dirname, "../", "users.json");
var uuid = require("uuid/v4");
var hbs = require("hbs");

var router = express.Router();

// Form body accepting/parsing setting
router.use(express.urlencoded({ extended: false }));

// Method overriding for accepting DELETE request
router.use(methodOverride("_method"));

hbs.registerPartials(path.join(__dirname, "../", "views"));
router.use(
  session({
    name: "users",
    secret: "atanu",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60,
      secure: false
    }
  })
);

router.get("/register", function(req, res) {
  res.render("register");
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
      password: password,
      blogs: []
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
  res.render("login");
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
    res.render("home", {
      layout: "layout1",
      name: user.name,
      bloglength: user.blogs.length,
      blogs: user.blogs
    });
  });
});

router.delete("/blog/delete/:blogId", middlewares.authenticate, function(
  req,
  res
) {
  var blogId = req.params.blogId;

  console.log(blogId);
  fs.readFile(userJSONPath, { encoding: "utf-8" }, function(err, users) {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
    var usersJavascript = JSON.parse(users);
    var users = usersJavascript.filter(function(user) {
      if (user.id == req.session.userId) {
        var blogs = user.blogs.filter(item => item.id !== blogId);
        return (user.blogs = blogs);
      }
      console.log(blogs);
    });
    var userJSON = JSON.stringify(users);
    req.session.save();
    fs.writeFile("./users.json", userJSON, function(err) {
      if (err) {
        console.log(err.message);
      }
    });
  });
  console.log(req.session);
  return res.redirect("/dashboard");
});
router.get("/blog/update/:blogId", middlewares.authenticate, function(
  req,
  res
) {
  // console.log(middlewares.users())
  var blogId = req.params.blogId;
  fs.readFile(userJSONPath, { encoding: "utf-8" }, function(err, users) {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
    var usersJavascript = JSON.parse(users);
    var user = usersJavascript.find(function(users) {
      return req.session.userId === users.id;
    });
    s;
    var blogs = user.blogs.filter(item => item.id == blogId);
    res.render("update", {
      layout: "layout1",
      id: blogId,
      title: blogs.title,
      content: blogs.content
    });
  });
});
router.delete("/logout", function(req, res) {
  req.session.destroy();
  return res.redirect("/login");
});
module.exports = router;
