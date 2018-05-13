/**
 * Callback example
 */

function taskOne(callback1) {
    console.log("Task one completed");
    callback1({
        name: "Ind"
    }); // invoking the callback function
}



// passing anonimous function to taskOne
taskOne(function (ev) {
    console.log("This is call back: ", ev);

});


function mycallback(data) {
    console.log("Hi its custom callback ", data);

}

// Passing a ref of mycallback function
taskOne(mycallback);


taskOne((res) => console.log("I am lambda", res, " received"));

// don't use + sign to concat message use comma instead
taskOne((res) => console.log("Got response" + res));
taskOne((res) => console.log("Got response", res));


function doSomeTask(cb) {
    var sum = 10 + 20;
    var multiply = 10 * 20;
    console.log("calling the callback");
    
    cb(sum, multiply);
}

doSomeTask((a, b) => console.log(a, b));


// nesty example of nested callback
doSomeTask((a, b) => {
    var total = a + b;
    total += 200;
    console.log("Total items",total);
    
    doSomeTask(function (a1, b1) {
        var total = a + b;
        total += 200;
        console.log("Total items",total);
        doSomeTask(function (a1, b1) {
            var total = a + b;
            total += 200;
            console.log("Total items",total);
            doSomeTask(function (a1, b1) {
                var total = a + b;
                total += 200;
                console.log("Total items",total);
                doSomeTask(function (a1, b1) {
                    var total = a + b;
                    total += 200;
                    console.log("Total items",total);
                });
            });
        });
    });

});