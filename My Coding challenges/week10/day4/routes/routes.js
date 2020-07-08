var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/posts', function (req,res) {
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function (err,posts) {
        var posts = JSON.parse(posts);
        var post = req.body;
        post.createdAt = new Date();
        posts.push(post);
        fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
            res.status(201).json({success:true, message:"Posted successfully"});
        })
    })
})

router.get('/posts/:postId', function (req,res) {
    var postId = req.params.postId;
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function (err,posts) {
        var posts = JSON.parse(posts);
        var outPost = posts.find(function (post) {
            return post.id === postId;
        })
        res.status(200).json(outPost);
    })
})

router.put('/posts/:postId', function (req,res) {
    var postId = req.params.postId;
    var updatedPost = req.body;
    
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function (err,posts) {
        var posts = JSON.parse(posts);
        var postIndex = posts.findIndex(function (post) {
            return post.id === postId;
        })
        posts[postIndex] = updatedPost;
        fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
            res.status(202).json({success:true, message:"Updated successfully"});
        })
    })
})

router.delete('/posts/:postId', function (req,res) {
    var postId = req.params.postId;
    fs.readFile('./data/posts.json', {encoding: 'utf-8'},function (err,posts) {
        var posts = JSON.parse(posts);
        var postIndex = posts.findIndex(function (post) {
            return post.id === postId;
        })
        posts.splice(postIndex,1);
        fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
            res.status(202).json({success:true, message:"Deleted successfully"});
        })
    });
})

module.exports = router;