var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Blog = require('../model/blog');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        unique: true,
        type: String,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        trim: true
      }
    },
    { timestamps: true }
  );
//statics - MOdels
//instance
userSchema.methods.getBlogs = function () {
  return new Promise( (resolve,reject) => {
    Blog.find({user: this._id})
    .then(function (blogs) {
      resolve(blogs);
    });
  });
}

userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10)
    .then(function (hashedPassword) {
        user.password = hashedPassword;
        next();
    })
})

var User = mongoose.model("user", userSchema);
module.exports = User;