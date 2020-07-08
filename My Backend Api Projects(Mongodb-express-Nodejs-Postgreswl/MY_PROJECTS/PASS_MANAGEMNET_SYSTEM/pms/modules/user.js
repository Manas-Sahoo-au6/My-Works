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
  var userSchema = new mongoose.Schema({
    username: {type:String,
      required:true,
      index:{
        unique:true,
      }
    },
    email :{
      type:String,
      required:true,
      index:{
        unique:true,
      }
    },
    password:{type:String,
      required:true,
      
    },
    date:{
      type:Date,
      default:Date.now
    }
  });

  var userModel  =  mongoose.model('user', userSchema);
  module.exports =  userModel;
