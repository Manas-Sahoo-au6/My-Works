require('./models/db');
const express = require('express');
const path = require('path');
var hbs = require('hbs');

const orderController = require('./controllers/orderController');


var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use(express.static(path.join(__dirname, '/public')));


app.set('view engine', 'hbs');
app.set("view options", { layout: "mainLayout" });

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


// app.get('/' , (req,res) => {
//   res.render('index', {
//     name : "manas "
//   })
// })


app.listen(8080, () => {
  console.log('server is listening port')
});



app.use('/', orderController);


