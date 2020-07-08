var blogNormalController = {};

blogNormalController.renderCreateBlog = function (req,res) {
    res.render('createBlog', {title : `Blogggieee | ${res.locals.user.name}`});
}

blogNormalController.renderUpdateBlog = function (req,res) {
    var blog = res.locals.user.blogs.find(function (blog) {
        return blog.id === req.params.blogId;
    })
    res.render('updateBlog', {title : `Blogggieee | ${res.locals.user.name}`, blog});
}

module.exports = blogNormalController;