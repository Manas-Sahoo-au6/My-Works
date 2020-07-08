var express = require('express')
var app = express()

var userRequets = require("./userRequests/userRequests")
var postingRequests = require("./postingRequests/postingRequests")

app.use(userRequets)
app.use(postingRequests)

app.listen(8080)
