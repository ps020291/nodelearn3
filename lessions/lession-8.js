process.title="Node Big File Writer";

var fs = require("fs");
setInterval(() => {
    console.log("running...");
    
},1000);
process.nextTick(()=>{
var writer = fs.createWriteStream("bigfile2.txt","utf8");

for (var i =0;i<1000000;i++){
    writer.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    (err)=> { if(err)console.log(err)});
    
}

writer.end();
});
