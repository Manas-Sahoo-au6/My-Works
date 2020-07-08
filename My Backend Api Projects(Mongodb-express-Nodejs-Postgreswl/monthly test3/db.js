var mongooose=require("mongoose")
mongooose.connect('mondodb://127.0.0.1:27017/test',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(function(){
    console.log("Database connected successfully")
}).catch(function(err){
    console.log(err.message)
})