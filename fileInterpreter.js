const fs = require('fs');
fs.writeFile('sample.txt','hello to all',function(err){
    if(err){
        return console.log(err);
    }
})