module.exports = {
    search:search,
    create:create
}




function search(req,res){
    res.json({data:["student1"]});
}

function create(req,res){
    res.json({msg:"Student created"});
}