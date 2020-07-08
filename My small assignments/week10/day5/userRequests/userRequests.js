var express = require("express")
var fs = require("fs")
// var path = require("path")
var bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")

var router = express.Router()

router.use(express.json())


var privateKey
fs.readFile('./data/privateKey.json', function(err, data) {
    if(err) {
        console.log(err)
        return res.status(500).send(err)
    } else {
        privateKey = JSON.parse(data)
        // console.log(privateKey)
    }
})

router.post('/user/register', function(req, res) {
    // console.log(req.body, typeof(req.body))
    var enteredUserId = req.body.userId
    var enteredEmail = req.body.email

    fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, userDetails) {
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        } else {
            // console.log(userDetails, typeof(userDetails))
            userDetails = JSON.parse(userDetails)

            //checking whether or not user name already exists.
            for(user of userDetails) {
                // console.log(user.userId, typeof(user.userId))
                if(enteredUserId == user.userId) {
                    return res.status(406).send(`${enteredUserId} already exists.`)   
                }
                if(enteredEmail == user.email) {
                    return res.status(406).send(`${enteredEmail} already exists.`)   
                }
            }

            var newUser = {}

            newUser.userId = enteredUserId
            newUser.fullName = req.body.fullName
            newUser.email = enteredEmail
            newUser.postIds = []
            newUser.commentIds = []
            newUser.likesIds = []
            newUser.isAdmin = false
            
            bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {
                if(err) {
                    console.log(err) 
                    return res.status(500).send(err)
                } else {
                    // console.log(hashedPassword)
                    newUser.password = hashedPassword
                    
                    // res.send(`Welcome, ${enteredUserId}`)

                    //directly logging in with successful registration.
                    currentUser = {...newUser}
                    // console.log(currentUser)

                    // generating jwt
                    jwt.sign({userId: currentUser.userId}, privateKey, {expiresIn: 60*60},function(err, token) {
                        if(err) {
                            console.log(err)
                            return res.status(500).send(err)
                        } else {
                            // console.log(token)
                            currentUser.jwt = true
                            userDetails.unshift(currentUser)
                            // console.log(userDetails)
                            userDetails = JSON.stringify(userDetails)
                            fs.writeFile('./data/userDetails.json', userDetails, function(err) {
                                if(err) {
                                    console.log(err)
                                    return res.status(500).send(err)
                                } else {
                                    return res.status(201).send(token)
                                }
                            })                                      
                        }
                    })
                }
            })   
                     
        }
    })
})


router.post('/user/login', function(req, res) {
    // console.log(req.body)
    var enteredUserId = req.body.userId

    fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, userDetails) {
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        } else {
            // console.log(userDetails, typeof(userDetails))
            userDetails = JSON.parse(userDetails)

            var foundUser = 0   //flag
            for(user of userDetails) {
                // console.log(user.userId, typeof(user.userId))
                if(enteredUserId == user.userId) {
                    foundUser = 1
                    bcrypt.compare(req.body.password, user.password, function(err, success) {
                        if(success == false) {
                            // console.log('wrong password')
                            return res.status(401).send('wrong password')
                        } else {
                            jwt.sign({userId : user.userId}, privateKey, {expiresIn: 60*60},function(err, token) {
                                if(err) {
                                    console.log(err)
                                    return res.status(500).send(err)
                                } else {
                                    user.jwt = true
                                    
                                    userDetails = JSON.stringify(userDetails)
                                    fs.writeFile('./data/userDetails.json', userDetails, function(err) {
                                        if(err) {
                                            console.log(err)
                                            return res.status(500).send(err)
                                        } else {
                                            return res.status(201).send(token)
                                        }
                                    })                                                                  
                                }
                            })
                        }
                    })
                }    
            }
            if(foundUser != 1) {

                return res.status(401).send('User not found')
            }
        }
    })       
})

router.delete('/user/logout', checkToken,function(req, res) {
    // var enterdToken = req.header('Authorization')
    // // console.log(enterdToken, typeof(enterdToken))

    // jwt.verify(enterdToken, privateKey, function(err, decoded) {
    //     if(err) {
    //         console.log('jwt error')
    //         res.status(401).send(err)
    //     } else {
            console.log(req.userId)

            fs.readFile('./data/userDetails.json', {encoding: 'utf-8'}, function(err, userDetails) {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    userDetails = JSON.parse(userDetails)

                    for(user of userDetails) {
                        if(user.userId == req.userId) {
                            user.jwt = false
                            break
                        }
                    }
                    userDetails = JSON.stringify(userDetails)
                    fs.writeFile('./data/userDetails.json', userDetails, function(err) {
                        if(err) {
                            console.log(err)
                            return res.status(500).send(err)
                        } else {
                            return res.status(202).send('logged out')
                        }
                    })        
                }
            })
        // }
    // })
})


router.delete('/user/deactivate', checkToken, function(req, res) {
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
                    
                    
                    

                                    var foundUser = 0      
                                    for(var i = 0; i < users.length; i++) {
                                        
                                        if(users[i].userId == req.userId) {
                                            foundUser = 1
                                            users.splice(i,1)

                                            // for(var i = 0; i < posts.length; i++) {
                                            for(var i = posts.length - 1; i >= 0; i--) {
                                                if(posts[i].postedBy == req.userId) {
                                                    posts.splice(i,1)
                                                }
                                            }
                                            // for(var i = 0; i < comments.length; i++) {
                                            for(var i = comments.length - 1; i >= 0; i--) {
                                                
                                                if(comments[i].commentedBy == req.userId) {
                                                    comments.splice(i,1)
                                                }
                                            }
                                            // for(var i = 0; i < likes.length; i++) {
                                            for(var i = likes.length - 1; i >= 0; i--) {
                                                if(likes[i].likedBy == req.userId) {
                                                    likes.splice(i,1)
                                                }
                                            }
                                        }

                                    }
                                    
                                    if(foundUser != 1) {
                                        return res.status(400).send('bad request')
                                    }



                                    likes = JSON.stringify(likes)
                                    fs.writeFile('./data/likes.json', likes,function(err) {
                                        if(err) {
                                            res.status(500)
                                        } 
                                    })

                                    users = JSON.stringify(users)
                                    fs.writeFile('./data/userDetails.json', users,function(err) {
                                        if(err) {
                                            res.status(500)
                                        } else {
                                            res.status(202).send(users)
                                        }
                                      
                                    })

                                    posts = JSON.stringify(posts)
                                    fs.writeFile('./data/posts.json', posts,function(err) {
                                        if(err) {
                                            res.status(500)
                                        } 
                                      
                                    })

                                    comments = JSON.stringify(comments)
                                    fs.writeFile('./data/comments.json', comments,function(err) {
                                        if(err) {
                                            res.status(500)
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

  

function checkToken(req, res, next) {
    var enterdToken = req.header('Authorization')
    // console.log(enterdToken, typeof(enterdToken))

    jwt.verify(enterdToken, privateKey, function(err, decoded) {
        if(err) {
            console.log('jwt error')
            res.status(401).send(err)
        } else {
            req.userId = decoded.userId
            next()
        }
    })        
}


module.exports = router
