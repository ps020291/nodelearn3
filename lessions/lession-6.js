
var fs = require("fs"),
path = require("path");
var read = fs.createReadStream("README.md1","utf-8");

read.on("open",function(){
        console.log('File open for reading');
        
});

read.on("data",function(data){
        console.log("received",data);
});

read.on('close',function(){
    console.log("File closed");
    
});

read.on('error',function(err){
    console.log("got error",err);
    
});
setImmediate(()=>{
    console.log("Read stream example");

});