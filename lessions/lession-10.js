/**
 * http module
 */

var http = require('http');
var fs = require("fs");
var app = {};

app["/"] = function (request, response) {
    fs.readFile("public/index.html","utf8",(err,data)=>{
        response.write(data);
        response.end();
    });
}

app["/aboutus"] = function (request, response) {
    response.write('About us page');
    response.end();
}


app["/contact"] = function (request, response) {
    response.write('contact page');
    response.end();
} 
function serveRequest(request, response) {
    var url = request.url;
    var handler = app[url];
    if (handler) {
        handler(request, response);
    } else {
        response.write("Not found");
        response.end();
    }

    // response.end();
}


var server = http.createServer(serveRequest);

server.listen(3000, function () {
    console.log("server running at port 3000");

});
