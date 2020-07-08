var fs   = require("fs");
function writetoTxt(aadhaar_user){
    var out = "";
    
    for (var key in aadhaar_user){
        out += key.toUpperCase()+" :  " + aadhaar_user[key] + "\n"
    }
    out += "...................................\n"

    fs.writeFile('aadhaar.txt', out ,function(err){
        console.log(err)
    })

}

var user = {  //user[name] user.name

           name  : "manas ",
           uid : "5700-8822-9742",
           dob : "30/06/1994",
           gender : "male",
           address : "jkas", 


}

writetoTxt(user);


