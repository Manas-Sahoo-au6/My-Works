var express = require( 'express' );
// console.log(express);
var path = require('path');
var  dummy = require('./dummy.js');
 console.log(dummy);
var app = express();  // by using this an event emmiter object has been created
//console.log(app);
var http = require ('http')
// var server = http.createServer(function(req,res){
//     res.setHeader('Xontent-Type','application/json')
//     res.end(JSON.stringify({name:'manas',id:1}))
// })

// server.listen(5500);

const courses = [
  {id :1 , name:'manas1'},
  {id :2 , name:'manas2'},
  {id :3 , name:'manas3'},
];

app.get('/',function(req ,res){
    console.log(req.url);
  res.send('basic'); 
    
})

app.get('/contact',function(req ,res){
    console.log(req.url);
    console.log(req.query);
    res.json(req.query);
   
    
});
app.get('/api/courses',function(req ,res){
  console.log("course printed")
  res.send(courses);
});
app.get('/api/courses/:id', function(req , res){
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('the course not found in given id ')
   res.send(course);
});

var port = process.env.PORT || 8080;
app.listen(port,function(){
  console.log(`listening on ${port}.. `);
  
});


