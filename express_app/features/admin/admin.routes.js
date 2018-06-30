var express = require('express');
// creating a group in express app
var routes = express.Router();

module.exports = routes;

routes.get('/search',(req,res)=>{
    res.json({data:["admin"]});
})