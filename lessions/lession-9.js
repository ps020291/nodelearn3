process.title="node big file read using readfile";
var fs = require("fs");
fs.readFile("bigfile.txt","utf-8",(err,data)=>{
    if(err) console.warn(err);
    console.log("Received");
});

setInterval(() => {
    console.log("running...");
 },1000);