var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema(
    {
        title : {
            type: String,
            required: true,
            trim: true
        },
        content : {
            type: String,
            required: true,
            trim: true
        },
        user : {
            type : Schema.Types.ObjectId,
            required : true
        }
    },
    {timestamps : true}      
)

var Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;