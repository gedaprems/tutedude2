const express = require('express');
const app = express();


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.get('/about',function(req,res){
    var request = req;
    res.send("This is about page");
})

app.get('/section',function(req,res){
    var request = req;
    res.send("This is section page which includes services which we provide");
})


app.listen(3000, function(){
    console.log("Server Started");
})