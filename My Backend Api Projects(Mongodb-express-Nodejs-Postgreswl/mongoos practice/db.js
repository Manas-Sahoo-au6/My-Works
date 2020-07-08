var mongoose = require("mongoose");

mongoose
  .connect(`mongodb://127.0.0.1:27017/practice`, {
    useNewUrlParser: true ,
    useUnifiedTopology : true
  })
  .then(function() {
    console.log('database connected sucessfully ');
  })
  .catch(function(err){
    console.log(err.message);
  });