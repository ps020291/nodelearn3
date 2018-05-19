/**
 * Working with node internal module: fs  (File system)
 */

var fs  = require("fs");


// async reading file
fs.readFile(__filename,"utf8",function(err,content){
        console.log(content);
});
console.log("After reading file");
var data = fs.readFileSync(__filename,"utf8");
console.log("============Got data=========");
console.log(data);

