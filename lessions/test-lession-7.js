var myevent= require("./lession-7");

var event = myevent.createEvent();
event.on('data',(data)=>{
    console.log("Received ",data);
    
});

event.on('save',function(){
    console.log("got request for save");
    
});

myevent.emitData();