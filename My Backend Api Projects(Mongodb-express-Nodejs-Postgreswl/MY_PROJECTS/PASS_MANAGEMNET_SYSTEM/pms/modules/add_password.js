var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/pms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function () {
    console.log("pms Database connected successfully");
  })
  .catch(function (err) {
    console.log(err.message);
  });
var passSchema = new mongoose.Schema({
  password_category: {
    type: String,
    required: true,
    index: {
      unique: true,
    }
  },
  password_detail: {
    type: String,
    required: true,
    
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var passModel = mongoose.model('password_details', passSchema);
module.exports = passModel;
