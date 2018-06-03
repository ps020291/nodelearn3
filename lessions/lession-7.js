var EventEmitter = require('events');

var event;

module.exports = {
    createEvent: function () {
        event = new EventEmitter();
        return event;
    },
    emitData: function () {
        event.emit("data", "This is data");
        event.emit("open");
        event.emit('close');
        event.emit("save");

        setInterval(()=>{
            event.emit("save");
        },2000);
    }
} 
