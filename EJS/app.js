const express = require('express');
const bodyParser = require('body-parser');


// setting up variables 
const app = express();
app.set("view engine","ejs");
var dayText = "";


app.get('/',function(req,res){

    var date = new Date();
    var day = date.getDay();

    if(day == 0 || day == 6){
        dayText = "Weekend";
    }else{
        dayText = "Weekday";

    }
    res.render("list", {dayej:dayText});
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
})