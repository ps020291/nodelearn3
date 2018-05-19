/**
 * Working with node internal module: path
 */

 var path = require("path");

console.log(path.delimiter);
console.log("filename => ", __filename);
console.log("dirname=>", path.dirname(__filename));
console.log("file extn=>", path.extname(__filename));
console.log("file parse=>", path.parse(__filename));
console.log("file join=>", path.join(__filename,"..","..","test","test.js"));
console.log("file normalize=>", path.normalize("/Users/indresh/Documents/NodeLearning/NodeLearn3/lessions/..\/./test/test.js"));
console.log("file is relative",path.relative("/test/admin/","/items.html"));
console.log("file is is absolute",path.isAbsolute("/test"));

