var User = require('../model/user');

module.exports = function (req, res, next) {
    if (req.session.userId) {
        User.findById(req.session.userId)
        .then(function (user) {
            res.locals.user = user; //locals by default accessible by hbs
            user.getBlogs().then(function (blogs) {
                res.locals.user.blogs = blogs;
                next();
            }); 
        })
    } else {
        res.redirect('/login');
    }
}