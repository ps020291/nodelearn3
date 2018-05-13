var num = 10;
console.log(num);


var message = "hi";
console.log(message);

if (num > 9) {
    console.log("Yes it is");

}

setTimeout(() => {
    console.log("After 2 seconds");

}, 2000);

for (var i = 0; i < 12; i++) {
    console.log("i = " + i);
}

setTimeout(() => {
    console.log("After 3 seconds");

}, 3000);


setTimeout(() => {
    console.log("After 1 seconds");

}, 1000);


// To check callback stack

function mycallback(data){
    console.log("received data = "+data);
    

    setTimeout(()=>{
        console.log("Another timer");
        
    },2000);

    console.log("Done callback");

}


function callIt(cb) {
    cb("Indresh");
}


setTimeout(()=>{
    callIt(mycallback);
},4000);
