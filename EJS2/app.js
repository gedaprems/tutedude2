const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

var items = [];

app.get("/",function(req,res){
    res.render("list",{eleList : items});
});

app.post("/",function(req,res){
    
    var itemName = req.body.ele1;
    items.push(itemName);

    res.redirect("/");
})


app.listen(3000, function(){
    console.log("Servers is running on port 3000");
})