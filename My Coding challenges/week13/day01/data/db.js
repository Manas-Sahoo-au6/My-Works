//importing the mongoose package
const mongoose = require("mongoose");
//setting up the connection with mongodb localhost db fish
mongoose
  .connect(`mongodb://127.0.0.1:27017/fish`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(conn => {
    console.log("Database Connected");
  })
  .catch(err => {
    console.log(err.message);
  });
