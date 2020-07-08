var express = require("express")
var fs = require("fs")
// var path = require("path")
var uuidv4 = require("uuid/v4")
var bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")

var router = express.Router()

router.use(express.json())


var privateKey
fs.readFile('./data/privateKey.json', {encoding: 'utf-8'},function(err, data) {
    if(err) {
        console.log(err)
        return res.status(500).send(err)
    } else {
        privateKey = JSON.parse(data)
        // console.log(privateKey)
    }
})


router.post('/posts', checkToken, isAdmin, function(req, res) {
    console.log(req.userId, 'is posting')
    var newPost = {}
    newPost.postId = uuidv4()
    newPost.postedBy = req.userId
    newPost.title = req.body.title
    newPost.postBody = req.body.postBody
    newPost.createdAt = Date()
    newPost.commentIds = []
    newPost.likesIds = []
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
        if(err) {
            res.status(500).send(err)
        } else {
            posts = JSON.parse(posts)
            posts.unshift(newPost)

            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, users) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    users = JSON.parse(users)

                    var foundUser = 0
                    for(user of users) {
                        if(user.userId == req.userId) {
                            foundUser = 1
                            user.postIds.push(newPost.postId)

                            users = JSON.stringify(users)
                            posts = JSON.stringify(posts)

                            fs.writeFile('./data/userDetails.json', users, function(err) {
                                if(err) {
                                    res.status(500).send(err)
                                } else {
                                    fs.writeFile('./data/posts.json', posts, function(err) {
                                        if(err) {
                                            console.log(err)
                                            return res.status(500).send(err)
                                        } else {
                                            return res.status(201).send(newPost)
                                        }
                                    })
                                }
                            })
                        }
                    }
                }
            })            
        }
    })
})



router.get('/posts/:getPostId', checkToken, function(req, res) {
    // console.log(req.params.getPostId, typeof(req.params.getPostId))
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
        if(err) {
            res.status(500).send(err)
        } else {
            posts = JSON.parse(posts)

            var foundPost = 0
            for(post of posts) {
                // console.log(post.postId, typeof(post.postId))
                if(post.postId == req.params.getPostId) {
                    foundPost = 1
                    return res.status(200).send(post)
                }
            }
            if(foundPost != 1) {
                res.status(400).send('No such post')
            }
        }
    })
})


router.patch('/posts/:getPostId', checkToken, function(req, res) {
    // console.log(req.params.getPostId, typeof(req.params.getPostId))
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
        if(err) {
            res.status(500).send(err)
        } else {
            posts = JSON.parse(posts)
            var foundPost = 0
            for(post of posts) {
                console.log(post)
                console.log(post.postedBy, typeof(post.userId))
                console.log(req.userId)
                if(post.postId == req.params.getPostId) {
                    if(post.postedBy == req.userId) {
                        foundPost = 1
                        if(req.body.title) {
                            post.title = req.body.title
                        }
                        if(req.body.postBody) {
                            post.postBody = req.body.postBody
                        }
                        console.log(post)
    
    
                        posts = JSON.stringify(posts)
                        fs.writeFile('./data/posts.json', posts, function(err) {
                            if(err) {
                                console.log(err)
                                return res.status(500).send(err)
                            } else {
                                return res.status(202).send(posts)
                            }
                        })
    
                    } else {
                        return res.status(401).send('You cannot edit this post')
                    }
                }
            }
            if(foundPost != 1) {
                return res.status(400).send('No such post')
            }
        }
    })
})




router.delete('/posts/:getPostId', checkToken, function(req, res) {

    fs.readFile('./data/likes.json', {encoding: 'utf-8'}, function(err, likes) {
        if(err) {
            res.status(500).send(err)
        } else {
            likes = JSON.parse(likes)

            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, users) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    users = JSON.parse(users)

                    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
                        if(err) {
                            res.status(500).send(err)
                        } else {
                            posts = JSON.parse(posts)
            
                            fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
                                if(err) {
                                    res.status(500).send(err)
                                } else {
                                    comments = JSON.parse(comments)
                    
                    
                    

                                    var foundPost = 0 
                                    // for(var i = 0; i < posts.length; i++) {     
                                    for(var i = posts.length - 1; i >= 0; i--) {
                                        if(posts[i].postId == req.params.getPostId) {
                                            foundPost = 1
                                
                                            if(posts[i].postedBy == req.userId) {
                                                posts.splice(i,1)


                                                for(user of users) {
                                                    // if(user.userId == req.userId) {
                                                        // for(var i = 0; i < user.postIds.length; i++) {
                                                        for(var i = user.postIds.length - 1; i >= 0; i--) {

                                                            if(user.postIds[i] == req.params.getPostId) {
                                                                user.postIds.splice(i,1)
                                                            }
                                                        }
                                                    // }
                                                    // for(var i = 0; i < user.likesIds.length; i++ ) {
                                                    for(var i = user.likesIds.length - 1; i >= 0; i--) {
                                                        // for(var j = 0; j < likes.length; j++) {
                                                        for(var j = likes.length - 1; j >= 0; j--) {
                                                            if(user.likesIds[i] == likes[j].likeId) {
                                                                if(likes[j].forPostId == req.params.getPostId) {
                                                                    user.likesIds.splice(i,1)
                                                                }
                                                            }
                                                        }
                                                    }

                                                    // for(var i = 0; i < user.commentIds.length; i++ ) {
                                                    for(var i = user.commentIds.length - 1; i >= 0; i-- ) {
                                                        // for(var j = 0; j < comments.length; j++) {
                                                        for(var j = comments.length - 1; j >= 0; j--) {  
                                                            if(user.commentIds[i] == comments[j].commentId) {
                                                                if(comments[j].postId == req.params.getPostId) {
                                                                    user.commentIds.splice(i,1)
                                                                }

                                                            }
                                                        }
                                                    }
                                                }

                                
                                                
                                                // for(var i = 0; i < comments.length; i++) {
                                                for(var i = comments.length - 1; i >= 0; i--) {
                                                    if(comments[i].postId == req.params.getPostId) {
                                                        console.log(comments[i])
                                                        // for(var j = 0; j < comments[i].likesIds.length; j++) {
                                                        for(var j = comments[i].likesIds.length - 1; j >= 0; j--) {
                                                            // for(var k = 0; k < likes.length; k++) {
                                                            for(var k = likes.length - 1; k >= 0; k--) {
                                                                if(likes[k].likeId == comments[i].likesIds[j]) {
                                                                    likes.splice(k,i)
                                                                    
                                                                }
                                                            }
                                                        }
                                                        
                                                        comments.splice(i,1)

                                                    }
                                                }


                                                // for(var i = 0; i < likes.length; i++) {
                                                for(var i = likes.length - 1; i >= 0; i--) {
                                                    if(likes[i].forPostId == req.params.getPostId) {
                                                        likes.splice(i,1)
                                                    }
                                                    // for(var j = 0; j < comments.length; j++) {
                                                    for(var j = comments.length - 1; j >= 0; j--) {
                                                        if((comments[j].postId == req.params.getPostId) && (likes[i].forCommentId == comments[j].commentId)) {
                                                            
                                                                likes.splice(i,1)
                                                            
                                                        }
                                                    }
                                                }

                                
                                                
                                                
                                                
                                
                                                
                                            } else {
                                                return res.status(401).send('not allowed')
                                            }
                                        }
                                    }
                                    if(foundPost != 1) {
                                        res.status(400).send('bad request')
                                    }



                                    likes = JSON.stringify(likes)
                                    fs.writeFile('./data/likes.json', likes,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } else {
                                            if(foundLike = 1) {
                                                res.send(likes)
                                            }
                                        }
                                    })

                                    users = JSON.stringify(users)
                                    fs.writeFile('./data/userDetails.json', users,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })

                                    posts = JSON.stringify(posts)
                                    fs.writeFile('./data/posts.json', posts,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                            console.log(err)
                                        } 
                                      
                                    })

                                    comments = JSON.stringify(comments)
                                    fs.writeFile('./data/comments.json', comments,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })
                    
                                    
                                }
                            })           
                        }
                    })                    
                }                
            })
        }
    })
})



router.post('/comments', checkToken, function(req, res) {
    var newComment = {}
    newComment.commentId = uuidv4()
    newComment.comment = req.body.comment
    newComment.commentedBy = req.userId
    newComment.postId = req.body.postId
    newComment.likesIds = []
    console.log(newComment, 'newComment')
    
    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
        if(err) {
            res.status(500).send(err)
        } else {
            posts = JSON.parse(posts)
            console.log(posts, 'posts')
            fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    comments = JSON.parse(comments)
                    console.log(comments)
                    var foundPost = 0
                    for(post of posts) {
                        if(post.postId == newComment.postId) {
                            console.log('found post')
                            foundPost = 1
                            post.commentIds.push(newComment.commentId)

                            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, users) {
                                if(err) {
                                    res.status(500).send(err) 
                                } else {
                                    users = JSON.parse(users)
                                    var foundUser = 0
                                    for (user of users) {
                                        foundUser = 1
                                        if(user.userId == newComment.commentedBy) {
                                            console.log('found user')
                                            user.commentIds.push(newComment.commentId)

                                            comments.push(newComment)
                                            console.log(comments, 'comments')

                                            users = JSON.stringify(users)
                                            posts = JSON.stringify(posts)
                                            comments = JSON.stringify(comments)
                                            fs.writeFile('./data/userDetails.json', users, function(err) {
                                                if(err) {
                                                    res.status(500).send(err)
                                                } else {
                                                    fs.writeFile('./data/posts.json', posts, function(err) {
                                                        if(err) {
                                                            res.status(500).send(err)
                                                        } else {
                                                            fs.writeFile('./data/comments.json', comments,function(err) {
                                                                if(err) {
                                                                    res.status(500).send(err)
                                                                } else {
                                                                    res.status(201).send(comments)
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })                                            
                                        }
                                    }
                                    if(foundUser != 1) {

                                        return res.status(400).send('No such user!')
                                    }
                                }
                            })
                        }
                    }
                    if(foundPost != 1) {
                        return res.status(400).send('No such post')
                    }
                }
            })
        }
    })
})


router.get('/comments/:getCommentId', checkToken, function(req, res) {

    fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
        if(err) {
            res.status(500).send(err)
        } else {
            comments = JSON.parse(comments)

            var foundComment = 0
            console.log(req.params.commentId)
            for(comment of comments) {
                if(comment.commentId == req.params.getCommentId) {
                    foundComment = 1
                    return res.status(200).send(comment)
                } 
            }
            if(foundComment != 1) {
                res.status(400).send('No such comment')
            }
        }
    })
})


router.patch('/comments/:getcommentId', checkToken, function(req, res) {
    // console.log(req.params.getPostId, typeof(req.params.getPostId))
    fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
        if(err) {
            res.status(500).send(err)
        } else {
            comments = JSON.parse(comments)
            var foundComment = 0
            for(comment of comments) {
                console.log(comment)
                console.log(comment.commentedBy, typeof(comment.userId))
                console.log(req.userId)
                if(comment.commentId == req.params.getcommentId) {
                    if(comment.commentedBy == req.userId) {
                        foundComment = 1
                        if(req.body.comment) {
                            comment.comment = req.body.comment
                        }
                       
                        console.log(comment)
    
    
                        comments = JSON.stringify(comments)
                        fs.writeFile('./data/comments.json', comments, function(err) {
                            if(err) {
                                console.log(err)
                                return res.status(500).send(err)
                            } else {
                                return res.status(202).send(comments)
                            }
                        })
    
                    } else {
                        return res.status(401).send('You cannot edit this comment')
                    }
                }
            }
            if(foundComment != 1) {
                return res.status(400).send('No such comment')
            }
        }
    })
})




router.delete('/comments/:getCommentId', checkToken, function(req, res) {

    fs.readFile('./data/likes.json', {encoding: 'utf-8'}, function(err, likes) {
        if(err) {
            res.status(500).send(err)
        } else {
            likes = JSON.parse(likes)

            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, users) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    users = JSON.parse(users)

                    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
                        if(err) {
                            res.status(500).send(err)
                        } else {
                            posts = JSON.parse(posts)
            
                            fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
                                if(err) {
                                    res.status(500).send(err)
                                } else {
                                    comments = JSON.parse(comments)
                    
                    
                    

                                    var foundComment = 0      
                                    // for(var i = 0; i < comments.length; i++) {
                                    for(var i = comments.length - 1; i >= 0; i--) {
                                        if(comments[i].commentId == req.params.getCommentId) {
                                            foundComment = 1
                                
                                            if(comments[i].commentedBy == req.userId) {
                                                comments.splice(i,1)


                                                for(user of users) {
                                                    // if(user.userId == req.userId) {
                                                        // for(var i = 0; i < user.commentIds.length; i++) {
                                                        for(var i = user.commentIds.length - 1; i >= 0; i--) {
                                                            if(user.commentIds[i] == req.params.getCommentId) {
                                                                user.commentIds.splice(i,1)
                                                            }
                                                        }
                                                        // for(var i = 0; i < user.likesIds.length; i++ ) {
                                                        for(var i = user.likesIds.length - 1; i >= 0; i-- ) {
                                                            // for(var j = 0; j < likes.length; j++) {
                                                            for(var j = likes.length - 1; j >= 0; j--) {
                                                                if(user.likesIds[i] == likes[j].likeId) {
                                                                    if(likes[j].forCommentId == req.params.getCommentId) {
                                                                        user.likesIds.splice(i,1)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    // }
                                                }
                                
                                                for(post of posts) {
                                                    // if(post.postedBy == req.userId) {
                                                        // for(var i = 0; i < post.commentIds.length; i++) {
                                                        for(var i = post.commentIds.length - 1; i >= 0; i--) {
                                                            if(post.commentIds[i] == req.params.getCommentId) {
                                                                post.commentIds.splice(i,1)
                                                            }
                                                        }
                                                    // }
                                                }


                                            


                                                // for(var i = 0; i < likes.length; i++) {
                                                for(var i = likes.length - 1; i >= 0; i--) {
                                                    if(likes[i].forCommentId == req.params.getCommentId) {
                                                        likes.splice(i,1)
                                                    }
                                                }
                                
                                                
                                                
                                                
                                
                                                
                                            } else {
                                                console.log(req.userId)
                                                return res.status(401).send('not allowed')
                                            }
                                        }
                                    }
                                    if(foundComment != 1) {
                                        res.status(400).send('bad request')
                                    }



                                    likes = JSON.stringify(likes)
                                    fs.writeFile('./data/likes.json', likes,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } else {
                                            if(foundLike = 1) {
                                                res.send(likes)
                                            }
                                        }
                                    })

                                    users = JSON.stringify(users)
                                    fs.writeFile('./data/userDetails.json', users,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })

                                    posts = JSON.stringify(posts)
                                    fs.writeFile('./data/posts.json', posts,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                            console.log(err)
                                        } 
                                      
                                    })

                                    comments = JSON.stringify(comments)
                                    fs.writeFile('./data/comments.json', comments,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })
                    
                                    
                                }
                            })           
                        }
                    })                    
                }                
            })
        }
    })
})






router.post('/likes/:getPostOrCommentId', checkToken, function(req, res) {
    newLike = {}
    newLike.likeId = uuidv4()
    newLike.liked = req.body.liked
    fs.readFile('./data/likes.json', {encoding:'utf-8'}, function(err, likes) {
        if(err) {
            res.status(500).send(err)
        } else {
            likes = JSON.parse(likes)
            fs.readFile('./data/userDetails.json', {encoding:'utf-8'}, function(err, users) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    users = JSON.parse(users)
                    var foundUser = 0
                    for (user of users) {
                        if(user.userId == req.userId) {
                            foundUser = 1
                            user.likesIds.push(newLike.likeId)
                            fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
                                if(err) {
                                    res.status(500).send(err)
                                } else {
                                    posts = JSON.parse(posts)
                                    var foundPost = 0
                                    for(post of posts) {
                                        if(post.postId == req.params.getPostOrCommentId) {
                                            console.log(post.likesIds)
                                            foundPost = 1
                                            newLike.forPostId = post.postId
                                            newLike.likedBy = req.userId
                                            post.likesIds.push(newLike.likeId)
                                        }
                                    }
                                    // if(foundPost != 1) {
        
                                        fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
                                            if(err) {
                                                res.status(500).send(err)
                                            } else {
                                                comments = JSON.parse(comments)
                                                var foundComment = 0
                                                for(comment of comments) {
                                                    if(comment.commentId == req.params.getPostOrCommentId) {
                                                        foundComment = 1
                                                        newLike.forCommentId = comment.commentId
                                                        newLike.likedBy = req.userId
                                                        comment.likesIds.push(newLike.likeId)
                                                    }
                                                }
                                                if((!foundPost && !foundComment) ) {
                                                    res.status(400).send('not found')
                                                } else {
                                                    likes.push(newLike)

                                                    users = JSON.stringify(users)
                                                    posts = JSON.stringify(posts)
                                                    comments = JSON.stringify(comments)
                                                    likes = JSON.stringify(likes)
                                                    fs.writeFile('./data/userDetails.json', users, function(err) {
                                                        if(err) {
                                                            res.status(500).send(err)
                                                        } else {
                                                            fs.writeFile('./data/posts.json', posts, function(err) {
                                                                if(err) {
                                                                    res.status(500).send(err)
                                                                } else {
                                                                    fs.writeFile('./data/comments.json', comments,function(err) {
                                                                        if(err) {
                                                                            res.status(500).send(err)
                                                                        } else {
                                                                            fs.writeFile('./data/likes.json',likes, function(err) {
                                                                                if(err) {
                                                                                    res.status(500).send(err)
                                                                                } else {
                                                                                    res.status(202).send(likes)
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })       
                                                }
                                            }
                                        })
        
                                    // }
        
                                   
                                }
                            })
                            
        
        
        
                        }
                    }
                    if(foundUser != 1) {
                        res.status(401).send('No such user')
                    }
                }
            })
        }
    })
})


router.delete('/likes/:getLikeId', checkToken, function(req, res) {

    fs.readFile('./data/likes.json', {encoding: 'utf-8'}, function(err, likes) {
        if(err) {
            res.status(500).send(err)
        } else {
            likes = JSON.parse(likes)

            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, users) {
                if(err) {
                    res.status(500).send(err)
                } else {
                    users = JSON.parse(users)

                    fs.readFile('./data/posts.json', {encoding: 'utf-8'}, function(err, posts) {
                        if(err) {
                            res.status(500).send(err)
                        } else {
                            posts = JSON.parse(posts)
            
                            fs.readFile('./data/comments.json', {encoding: 'utf-8'}, function(err, comments) {
                                if(err) {
                                    res.status(500).send(err)
                                } else {
                                    comments = JSON.parse(comments)
                    
                    
                    

                                    var foundLike = 0      
                                    // for(var i = 0; i < likes.length; i++) {
                                    for(var i = likes.length - 1; i >= 0; i--) {
                                        // console.log(likes[i])
                                        if(likes[i].likeId == req.params.getLikeId) {
                                            foundLike = 1
                                            // console.log('found like')
                                
                                            if(likes[i].likedBy == req.userId) {
                                                likes.splice(i,1)


                                                for(user of users) {
                                                    // if(user.userId == req.userId) {
                                                        // for(var i = 0; i < user.likesIds.length; i++) {
                                                        for(var i = user.likesIds.length - 1; i >= 0; i--) {
                                                            if(user.likesIds[i] == req.params.getLikeId) {
                                                                user.likesIds.splice(i,1)
                                                            }
                                                        }
                                                    // }
                                                }
                                
                                                for(post of posts) {
                                                    // if(post.postedBy == req.userId) {
                                                        // for(var i = 0; i < post.likesIds.length; i++) {
                                                        for(var i = post.likesIds.length - 1; i >= 0; i--) {
                                                            if(post.likesIds[i] == req.params.getLikeId) {
                                                                post.likesIds.splice(i,1)
                                                            }
                                                        }
                                                    // }
                                                }


                                                for(comment of comments) {
                                                    // if(comment.commentedBy == req.userId) {
                                                        // for(var i = 0; i < comment.likesIds.length; i++) {
                                                        for(var i = comment.likesIds.length - 1; i >= 0; i--) {
                                                            if(comment.likesIds[i] == req.params.getLikeId) {
                                                                comment.likesIds.splice(i,1)
                                                            }
                                                        }
                                                    // }
                                                }

                                
                                                
                                                
                                                
                                
                                                
                                            } else {
                                                return res.status(401).send('not allowed')
                                            }
                                        }
                                    }
                                    if(foundLike != 1) {
                                        res.status(400).send('bad request')
                                    }



                                    likes = JSON.stringify(likes)
                                    fs.writeFile('./data/likes.json', likes,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } else {
                                            if(foundLike = 1) {
                                                res.send(likes)
                                            }
                                        }
                                    })

                                    users = JSON.stringify(users)
                                    fs.writeFile('./data/userDetails.json', users,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })

                                    posts = JSON.stringify(posts)
                                    fs.writeFile('./data/posts.json', posts,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                            console.log(err)
                                        } 
                                      
                                    })

                                    comments = JSON.stringify(comments)
                                    fs.writeFile('./data/comments.json', comments,function(err) {
                                        if(err) {
                                            res.status(500).send(err)
                                        } 
                                      
                                    })
                    
                                    
                                }
                            })           
                        }
                    })                    
                }                
            })
        }
    })
})








    








// function to verify token as well as check whether or not user is logged in.
function checkToken(req, res, next) {
    var enterdToken = req.header('Authorization')
    // console.log(enterdToken, typeof(enterdToken))

    jwt.verify(enterdToken, privateKey, function(err, decoded) {
        if(err) {
            console.log('jwt error')
            res.status(401).send(err)
        } else {
            req.userId = decoded.userId


            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, userDetails) {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    userDetails = JSON.parse(userDetails)

                    for(user of userDetails) {
                        if(user.userId == req.userId) {
                            if(user.jwt == false) {
                                return res.status(401).send('login again')
                            } else {
                                return next()
                            }
                        }
                    }
                }
            })
        }
    })        
}



// function to verify admin
function isAdmin(req, res, next) {
    fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, userDetails) {
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        } else {
            userDetails = JSON.parse(userDetails)
            // console.log('userDetails', userDetails)
            for(user of userDetails) {
                if(user.userId == req.userId) {
                    if(user.isAdmin === true) {
                        console.log('admin!', user.isAdmin)
                        return next()
                    } else {
                        console.log('not admin!')
                        return res.status(401).send('you cannot post.')
                    }
                }
            }
        }
    })
}




module.exports = router
