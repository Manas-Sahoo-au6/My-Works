var express = require( 'express' ), bodyParser = require('body-parser');;
var path = require('path');
var app = express(); 
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'static')));

app.use(bodyParser.json());

//middle ware 1 
// app.get('/',function(req ,res){
    
//   res.send('basic');   
// });
//middleware 2
app.get('/',function(req ,res){
    
    res.sendFile(path.join( __dirname,'static' , 'index.html'));   
});


app.post('/data', function(request, response){
  console.log(request.body);      // your JSON
  
   response.send(request.body);    // echo the result back
});



// app.get('/search', function (req, res) {
//   res.header("Content-Type",'application/json');
//   res.send(JSON.stringify(data));
// })

app.listen(8080);