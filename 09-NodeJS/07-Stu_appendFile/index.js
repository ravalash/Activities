var fs = require("fs");
fs.appendFile("commit.txt", process.argv[2]+'\n', function(error){
    if(error){
        return console.log(error);
    }
    console.log("Success");

})