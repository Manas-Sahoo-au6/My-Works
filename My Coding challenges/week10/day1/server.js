var express = require( 'express' );
var path = require('path');
var app = express(); 
var morgan = require('morgan');

app.use(morgan('dev'));

//middle ware 1 
app.get('/',function(req ,res){
    
  res.send('basic');   
})
//middleware 2
app.get('/contact',function(req ,res){
    console.log(req.url);
    console.log(req.query);
    res.json(req.query);   
})


app.listen(8080,function(){
  
});
