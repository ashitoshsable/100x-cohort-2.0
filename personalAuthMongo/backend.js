const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const jwtPassword = "8675309";     

const app = express();
const port = 3000;
mongoose.connect("mongodb+srv://ashitoshsable09:9vc1QiVkes6KOXf6@database1.crbcjg4.mongodb.net/auth")
app.use(cors());

const User = mongoose.model("logins",{
    username : String,
    password: String,
    name: String
});

app.get("/signup",async (req,res)=>{
    const newUsername = req.query.username;
    const newPassword = req.query.password;

    const exits = await User.findOne({username:newUsername});
    if(exits){
        res.status(400).send("failed");
        return;
    }
    const newUser = new User({
        username : newUsername,
        password: newPassword
    })

    var token = jwt.sign({username:newUsername},jwtPassword);

    newUser.save();
    res.status(200).send({
        "msg":"success",
        "token":token
    });
    return;
});

app.get("/login",async (req,res)=>{
    const newUsername = req.query.username;
    const newPassword = req.query.password;

    const exits = await User.findOne({username:newUsername,password:newPassword});
    if(exits){
        res.status(200).send("success");
        return;
    }else{
        res.status(400).send("failed");
        return;
    }
});

app.listen(port,()=>{
    console.log(`The server is running on ${port}!`);
});

