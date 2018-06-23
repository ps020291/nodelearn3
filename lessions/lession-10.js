/**
 * http module
 */

var http = require('http');
var fs = require("fs");
var url = require('url');
var querystring = require('querystring');
var routeHandler = {};

routeHandler["/"] = function (request, response) {
    fs.readFile("public/index.html","utf8",(err,data)=>{
        response.write(data);
        response.end();
    });
}

routeHandler["/aboutus"] = function (request, response) {
    response.write('About us page');
    response.end();
}


routeHandler["/contact"] = function (request, response) {
    response.write('contact page');
    response.end();
} 
routeHandler["/search"] = function (request, response) {
    response.write('Search Result Page');
    response.write("You search for: "+ JSON.stringify(request.params));
    response.end();
} 

routeHandler["/products"] = function (request, response) {
    //response.write('Search Result Page');
    var list = [
        {id:1,name:"product name1"},
        {id:2,name:"product name2"},
    ];
    console.log(request.headers);
    response.writeHead(200,{"Content-Type":"application/json"});
    response.write(JSON.stringify({search:request.params,result:list}));
    response.end();
} 


function serveRequest(request, response) {
    var req_url = request.url;
    console.log("raw",req_url);
    var parsedUrl  = url.parse(req_url);
    var params = querystring.parse(parsedUrl.query);
    request.params = params;
    console.log("parsed",parsedUrl);
    console.log("query", params);

  //  console.log("tstin",url.parse("http://localhost:3000/contactus?name=fdsfs"));
    
    
    var handler = routeHandler[parsedUrl.pathname];
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
