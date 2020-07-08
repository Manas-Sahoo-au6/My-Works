const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');



const sequelize = require('./db');


//TEST DB 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



const app = express();




app.get('/', (req, res) => {
    res.send('hello world ');
});

// Gig routes
app.use('/gigs' ,require('./routes/gigs'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});