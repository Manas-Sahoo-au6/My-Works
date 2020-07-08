var bcrypt = require('bcrypt');
var User = require('../../model/user');

var userApiController = {};

userApiController.registerUser = function (req, res) {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // pre middleware
    user.save()
    .then(function (user) {
        res.redirect('/login')
    })
    .catch(function (err) {
        res.redirect('/register')
    })
}

userApiController.loginUser = function (req, res) {
    var email = req.body.email;
    var pwd = req.body.password;
    User.findOne({email : email})
    .then(function (user) {
        bcrypt.compare(pwd, user.password)
        .then(function (result) {
            if (result) {
                req.session.userId = user._id;
                return res.redirect('/dashboard')
            };
            res.redirect('/login');
        })
    })
    .catch(function (err) {
        res.redirect('/login');
    })
}

userApiController.logoutUser = function (req, res) {
    req.session.destroy();
    res.redirect('/home');
}

module.exports = userApiController;