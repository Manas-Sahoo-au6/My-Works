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
var passCatSchema = new mongoose.Schema({
  password_category: {
    type: String,
    required: true,
    index: {
      unique: true,
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var passCatModel = mongoose.model('password_categories', passCatSchema);
module.exports = passCatModel;
