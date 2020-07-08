
const data = require("./data");

var display = function () {
    for (var i=0;i<data.length;i++){
        console.log(i+" "+data[i].title);
        console.log(i+ " "+data[i].body);
        console.log("---------")
    }
}



module.exports = {display};




