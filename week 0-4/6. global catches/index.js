const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res)=>{
    console.log("Hello World!");
});

app.use((err,req,res,next)=>{
    res.status(500).send("Server Error!");
});