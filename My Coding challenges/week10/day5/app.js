var express = require('express');
var hbs = require('hbs');
var fetch = require('node-fetch');

var app = express();
app.listen(3000);

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/home', function (req,res) {
    var name = req.query.name;
    res.render('home', {name});
})

app.get('/todos', function (req,res) {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(function (result) {
        return result.json();
    })
    .then(function (todos) {
        res.render('todos', {todos})
    })
})

app.get('/contactus', function (req,res) {
    res.render('contactUs');
})