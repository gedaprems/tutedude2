const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//------------------------------------------ Initialize in variable express()

const app = express();


//------------------------------------------ Setting engine and public folder

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//-------------------------------------------Setting up mongoose connection, schema, model

mongoose.connect("mongodb://127.0.0.1:27017/todo");
const trySchema = new mongoose.Schema({
    name: String
});
const item = mongoose.model("task",trySchema);  // defining the collections 


//------------------------------------------ Variable for list
var items = [];


//------------------------------------------- Routes
app.get("/",function(req,res){

    item.find({},function(err, foundItems){
        if(err){
            console.log(err);
        }else{
            res.render("list",{eleList : foundItems});
        }
    });
});

app.post("/",function(req,res){
    
    var itemName = req.body.ele1;

    if(itemName != ""){
        const todo = new item({              
            name:itemName
        })
    
        todo.save();
    }
    res.redirect("/");
})

app.post("/delete",function(req,res){
    const checked = req.body.checkbox;
    item.findByIdAndRemove(checked,function(err){
        if(!err){
            res.redirect("/");
        }
    })
})

//-------------------------------------------- Calling Listen Express function.
app.listen(3000, function(){
    console.log("Servers is running on port 3000");
})