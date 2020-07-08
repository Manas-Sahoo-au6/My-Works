var mongoose = require("mongoose");


mongoose
  .connect(`mongodb+srv://manasranjan:zXsSCBwNaHvwFO3i@cluster0-hwlgh.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function () {
    console.log('database connected sucessfully ');
  })
  .catch(function (err) {
    console.log(err.message);
  });



