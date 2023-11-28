const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    var first = req.body.first;
    var surname = req.body.surname;
    var fullname = first + " " +surname;

    console.log(fullname);
});




app.listen(3000,function(){
    console.log("Servers started at 3000");
});