var express = require("express");
var router = express.Router();
var userModule = require("../modules/user");
var passCatModel = require("../modules/password_category");
var passModel = require("../modules/add_password");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
var getPassCat = passCatModel.find({});

/* GET home page. */

function checkLoginUser(req, res, next) {
  //token ko bina get kie hue hum log local storage se nhi kar sakte hai
  var userToken = localStorage.getItem("userToken");
  try {
    var decoded = jwt.verify(userToken, "loginToken");
  } catch (err) {
    res.redirect("/");
  }
  next();
}

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
//middleware for checking same email and userr name is there in data base or not

function checkEmail(req, res, next) {
  var email = req.body.email;
  var checkexistemail = userModule.findOne({ email: email });
  checkexistemail.exec((err, data) => {
    if (err) throw err;
    if (data) {
      // //return agar use nhi karenege to app error ane ke bad turant crash ajayega phir se restart karna pdega
      return res.render("signup", {
        title: "Password Management system ",
        msg: "Email already exist ",
      });
    }
    next();
  });
}

//middleware to check user name
function checkUsername(req, res, next) {
  var username = req.body.Username;
  var checkexistusername = userModule.findOne({ username: username });
  checkexistusername.exec((err, data) => {
    if (err) throw err;
    if (data) {
      // //return agar use nhi karenege to app error ane ke bad turant crash ajayega phir se restart karna pdega
      return res.render("signup", {
        title: "Password Management system ",
        msg: "Username already exist ",
      });
    }
    next();
  });
}

router.get("/", function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  if (loginUser) {
    res.redirect("/dashboard");
  } else {
    res.render("index", { title: "Password Management system ", msg: "" });
  }
});

router.post("/", function (req, res, next) {
  var username = req.body.Username;
  var password = req.body.password;

  var checkUser = userModule.findOne({ username: username });
  checkUser.exec((err, data) => {
    if (err) throw err;

    //data object m arha hai usko get karna hai
    var getUserId = data._id;
    var getPassword = data.password;
    if (bcrypt.compareSync(password, getPassword)) {
      //making a token usig jwt token for authentictaion
      var token = jwt.sign({ userId: getUserId }, "loginToken");
      console.log(token);
      localStorage.setItem("userToken", token);
      //agar humlog username ko kahi pe print karna chhte hai jaise ki user login krega to uska name dikhna chhie to isko jwt ki madad se save karke rakh rhe hai
      localStorage.setItem("loginUser", username);

      res.redirect("/dashboard");
    } else {
      res.render("index", {
        title: "Password Management system ",
        msg: "Invalid Username and Password ",
      });
    }
  });
});

//dashboard route

router.get("/dashboard", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  res.render("dashboard", {
    title: "Password Management system ",
    loginUser: loginUser,
    msg: "",
  });
});

router.get("/signup", function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  if (loginUser) {
    res.redirect("/dashboard");
  } else {
    res.render("signup", { title: "Password Management system ", msg: "" });
  }
});

router.post("/signup", checkUsername, checkEmail, function (req, res, next) {
  var username = req.body.Username;
  var email = req.body.email;
  var password = req.body.password;
  var confpassword = req.body.confpassword;
  // check for password matching with confiremed or not
  if (password != confpassword) {
    res.render("signup", {
      title: "Password Management system ",
      msg: "Password doesnot matched ",
    });
  } else {
    var password = bcrypt.hashSync(req.body.password, 10);
    var userDetails = new userModule({
      username: username,
      email: email,
      password: password,
    });
    userDetails.save((err, doc) => {
      if (err) throw err;
      var loginUser = localStorage.getItem("loginUser");
      res.render("dashboard", {
        title: "Password Management system ",
        loginUser: loginUser,
        msg: "User Registered sucessfully ",
      });
    });
  }
});

router.get("/passwordCategory", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  getPassCat.exec(function (err, data) {
    if (err) throw err;
    res.render("password_category", {
      title: "Password Management system ",
      loginUser: loginUser,
      records: data,
    });
  });
});

//for deletig Category of passwords
router.get("/passwordCategory/delete/:id", checkLoginUser, function (
  req,
  res,
  next
) {
  var loginUser = localStorage.getItem("loginUser");
  var passcat_id = req.params.id;
  var passdelete = passCatModel.findByIdAndDelete(passcat_id);
  passdelete.exec(function (err) {
    if (err) throw err;
    res.redirect("/passwordCategory");
  });
});

//for editing category details
router.get("/passwordCategory/edit/:id", checkLoginUser, function (
  req,
  res,
  next
) {
  var loginUser = localStorage.getItem("loginUser");
  var passcat_id = req.params.id;
  var getpassCategory = passCatModel.findById(passcat_id);
  getpassCategory.exec(function (err, data) {
    if (err) throw err;
    console.log(data);
    res.render("edit_pass_category", {
      title: "Edit Password Category ",
      loginUser: loginUser,
      records: data,
      errors: "",
      success: "",
      id: passcat_id,
    });
  });
});

//for  post methode edition
router.post("/passwordCategory/edit/", checkLoginUser, function (
  req,
  res,
  next
) {
  var loginUser = localStorage.getItem("loginUser");
  var passcat_id = req.body.id;
  var passwordCategory = req.body.passwordCategory;
  var update_passCat = passCatModel.findByIdAndUpdate(passcat_id, {
    password_category: passwordCategory,
  });
  update_passCat.exec(function (err, data) {
    if (err) throw err;
    res.redirect("/passwordCategory");
  });
});

router.get("/addNewCategory", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");

  res.render("add_new_category", {
    title: "Add New Category ",
    loginUser: loginUser,
    errors: "",
    success: "",
  });
});

router.post(
  "/addNewCategory",
  checkLoginUser,
  [
    check("passwordCategory", "Enter Password Category Name").isLength({
      min: 1,
    }),
  ],
  function (req, res, next) {
    var loginUser = localStorage.getItem("loginUser");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add_new_category", {
        title: "Add New Category ",
        loginUser: loginUser,
        errors: errors.mapped(),
        success: "",
      });
    } else {
      var passCatName = req.body.passwordCategory;
      //saving insisde the data base
      var passcatDetails = new passCatModel({
        password_category: passCatName,
      });
      passcatDetails.save(function (err, data) {
        if (err) throw err;
        res.render("add_new_category", {
          title: "Add New Category ",
          loginUser: loginUser,
          errors: "",
          success: "password category inserted sucessfully",
        });
      });
    }
  }
);

router.get("/addNewPassword", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  getPassCat.exec(function (err, data) {
    if (err) throw err;
    res.render("add-new-password", {
      title: "Add New Password ",
      loginUser: loginUser,
      records: data,
      success: "",
    });
  });
});

router.post("/addNewPassword", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");

  var pass_cat = req.body.password_category;
  console.log(req.body);
  var pass_details = req.body.pass_details;

  var password_details = new passModel({
    password_category: pass_cat,
    password_detail: pass_details,
  });

  password_details.save(function (err, doc) {
    getPassCat.exec(function (err, data) {
      if (err) throw err;
      res.render("add-new-password", {
        title: "Add New Password ",
        loginUser: loginUser,
        records: data,
        success: "password details Inserted Sucessfully",
      });
    });
    console.log(password_details);
  });
});

router.get("/passwordDetails", checkLoginUser, function (req, res, next) {
  var loginUser = localStorage.getItem("loginUser");
  res.render("view-all-password", {
    title: "Add New Password ",
    loginUser: loginUser,
  });
});

router.get("/logout", function (req, res, next) {
  localStorage.removeItem("userToken");
  localStorage.removeItem("loginUser");
  res.redirect("/");
});

module.exports = router;
