const fs = require('fs');

let data;

fs.readFile(`${__dirname}/data.json`, {encoding:'utf-8'}, function (err,res) {
    data = JSON.parse(res);
    // data[Symbol.iterator] = function () {
    //     const keys = Object.keys(this); //['Post-1',...]
    //     let index = -1;
    //     let limit = keys.length;
    //     let data = this;
    //     const iterator = {
    //         next : function () {
    //             index++;
    //             if (index<limit){
    //                 return {
    //                     value : 'Post Id : '+data[keys[index]].id+' --- Title : '+data[keys[index]].title, 
    //                     done : false
    //                 }
    //             }
    //             return {value : undefined, done : true}
    //         }
    //     }
    //     return iterator;
    // }
    
    data[Symbol.iterator] = function* () {
        const keys = Object.keys(this);
        let index = 0;
        let limit = keys.length;
        let data = this;
        while (index<limit){
            yield 'Post Id : '+data[keys[index]].id+' --- Title : '+data[keys[index]].title;
            index++;
        }
    }
    
    for (const post of data) {
        console.log(post)
    }
});




