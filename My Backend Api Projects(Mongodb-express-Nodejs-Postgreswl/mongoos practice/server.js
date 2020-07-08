var express = require('express');

require('./db')


var Mark = require("./models/Mark")

 require("./db");

var app = express();

app.use (express.urlencoded({extended:false}));


app.get("/",function(req,res){
 
  Mark.find({}).then(function(allMarks){
    console.log(allMarks)
    res.send("hello world")
  });
});


app.get ('/addmark', function(req,res){
  var formString = `
  <h1 style = " color: red; text-align : center :">Hello chutu Enter your Class Details </h1>
 <form method="POST" action="/submit">
    <input type="text" name="name" required
      placeholder="enter your name">

<input type="number" name="mark" required placeholder="enter your mark">
<input type="number" name="class" required
  placeholder="enter your class">
<input type="text" name="section" required
  placeholder="enter your section">
  <input type="submit" value="create record"/>

</form> `;

res.send(formString);
});

//post request /submit 

app.post('/submit', function (req,res){
  console.log (req.body);
  //creating a new record 

  var newMark = new Mark ({...req.body});



  newMark
  .save()
  .then(function(newMark){
    console.log(newMark);
    res.send("form submited sucesfully");
  }).catch(function(err){
    console.log(err.message)
   res.status(500).send("server eroor")
  });
  console.log(newMark);
  
});

app.listen(4321,function(){
  console.log ("server connected ")
})