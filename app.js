var express = require("express");
var app = express();

app.use('/assets',express.static(__dirname+'/assets'));

app.get("/", function(req,res){
    
    res.render("home/home.ejs");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started");
});