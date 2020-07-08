const express = require('express');

const app = express();
app.use(express.json());
const path = require('path');

 require('./db');
const collection = 'todo' ;

app.get('/' ,(req,res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/getTodos' ,(req,res) => {
  db.getDB()
})



app.listen(3000, () =>{
  console.log('port is listening database on port 3000 ');
});
