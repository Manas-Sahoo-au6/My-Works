var mongoose = require("mongoose")
// step 1: blueprint of how a table should be


var Schema = mongoose.Schema;

var markSchema = new Schema({
  name : {
    type: String,
    required : true,
    
  },
  mark: {
    type: Number,
    required :true
  },
  class : { type :Number , required:true},
  section : {type: String ,default :"A", trim :true}
});
// statics and models.
markSchema.statics.findByMark = function(mark){
  // have the documet find by mark
  return new Promise(function(resolve, reject){
    Mark.find({mark: mark})
    .then
  })
}

var Mark = mongoose.model('mark', markSchema);

module.exports = Mark;