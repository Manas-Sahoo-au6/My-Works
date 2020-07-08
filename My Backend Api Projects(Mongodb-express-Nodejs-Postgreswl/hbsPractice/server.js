var express = require('express');
var app = express();
var hbs = require('hbs');
var path = require('path')

app.set('view engine', 'hbs');
// if we want to change views folder to any name then we have write 
// app.set ('views' , path.join(__dirname , 'handlebar'))

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));



app.get('/' , function (req,res) {

  var name = req.query.name;
  if(!name) name = 'default name';
  res.render('index', {
    name : name,
    headerLogo : 'my logo',
    ids : [{id : 1}, {id : 2},{id : 3}]

  });
});



app.listen(8080, () =>{
   console.log('server is listening port' )
});