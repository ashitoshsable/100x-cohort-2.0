// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney


const express = require("express");

const app = express();
const port = 3000;

app.get("/",function(req,res){
    res.send("Hello World!");
})

app.post("/con",function(req,res){
    res.send("<h1>Hello World</h1><p>why bro</p>");
})

app.put("/son",function(req,res){

})

app.delete("/gon",function(req,res){
    
})

app.listen(3000,function(){
    console.log("listening at port - "+port);
});