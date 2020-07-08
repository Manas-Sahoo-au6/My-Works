const express = require('express');


const joi = require('joi');

const app = express();


 app.use(express.json());
  const courses = [
   { id : 1 , name : "course1"},
  { id : 2 , name : "course1"},
  { id : 3 , name : "course1"},

                   ];
app.get('/', (req,res) => {
    res.send('hellow world')
});
app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
     let COURSE = courses.find( c => c.id=== parseInt(req.params.id) );
     if(!COURSE) res.status(400).send('the given id is not there inside the courses');
     res.send(COURSE);
});


app.post('/api/courses', (req,res) => {

    const { error} =validateCourse(req.body);



    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }


const course = {
    id : courses.length +1 ,
    name: req.body.name 
};
  
courses.push(course);
res.send("sucessfuly registed");
    
});




app.patch('/api/courses/:id' , (req,res) => {
    let COURSE = courses.find( c => c.id=== parseInt(req.params.id) );
    if(!COURSE) res.status(400).send('the given id is not there inside the courses');
    
   //validate 
   // if invalid , return 400 -bad request
   

const result = validateCourse(req.body);
const { error} =validateCourse(req.body);



    if (error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    COURSE.name = req.body.name;
    res.send(COURSE);  

});


app.delete('/api/courses/:id', (req,res)=>{
    let COURSE = courses.find( c => c.id=== parseInt(req.params.id) );
    if(!COURSE) res.status(400).send('the given id is not there inside the courses');
    
    
    //deletet 

    const index = courses.indexOf(COURSE);
    courses.splice(index,1);
 //reteyurn
    res.send(COURSE);
})


  function validateCourse(course){
    const schema = {
        name : joi.string().min(3).required()
    }

    return joi.validate(course,schema);


  }







var PORT = process.env.Port || 3000;
app.listen( PORT,()=>{
console.log(`port is listening ${PORT} `);

});