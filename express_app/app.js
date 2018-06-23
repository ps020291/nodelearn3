var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');

// initilizing the express and storing it in app variable.
var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache:true
});

// serving static resources like css, images
app.use("/",express.static(path.join(__dirname,'../public')));


// Defining routes
app.get("/",(request,response)=>{
    response.render('index.html',{appname:"Express App",list:['Grreen','Blue']});
});


app.get("/about",(request,response)=>{
   response.render('about.html');
});

app.get("/api",(request,response)=>{
    console.log(request.url);
    response.json({status:true,data:'This is data',list:['Grreen','Blue']});
});

// Listining on port 3000
app.listen(3000,()=>{
    console.log("Express server running at port 3000");
})
