var Blog = require('../../model/blog');

var blogApiController = {};
//HOmepage blogs
blogApiController.getBlogs = function (req,res) {
    Blog.find()
    .then(function (blogs) {
        res.send(blogs);
    })
}

blogApiController.createBlog = function (req,res) {
    var blog = new Blog({
        title : req.body.blogTitle,
        content : req.body.blogContent,
        user : req.session.userId
    })
    blog.save()
    .then(function (blog) {
        res.redirect('/dashboard');
    })
}

blogApiController.updateBlog = function (req,res) {
    var blogId = req.params.blogId;
    var updatedTitle = req.body.blogTitle;
    var updatedContent = req.body.blogContent;
    Blog.updateOne({_id : blogId}, {$set : {title : updatedTitle,content: updatedContent}})
    .then(function (blog) {
        res.redirect('/dashboard');
    }) 
}

blogApiController.deleteBlog = function (req,res) {
    var blogId = req.params.blogId;
    Blog.deleteOne({_id : blogId})
    .then(function (doc) {
        res.redirect('/dashboard');
    })
}

module.exports = blogApiController;