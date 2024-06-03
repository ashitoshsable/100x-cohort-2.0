const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "0000009211";

const app = express();
app.use(express.json());
const port = 3000;

mongoose.connect("mongodb+srv://ashitoshsable09:9vc1QiVkes6KOXf6@helloworldinstance.irhs9ec.mongodb.net/user_app");

const User = mongoose.model('Users',{
    username : String,
    password: String,
    name: String
});


app.get("/signup", async (req,res)=>{
    const newUsername = req.headers.username;
    const newPassword = req.headers.password;
    const newName = req.body.name;

    const existingUser = await User.findOne({username: newUsername});

    if(existingUser){
        return res.status(400).send({
            "message" : "username is taken!",
        });
    }

    const user = new User({
        username : newUsername,
        password: newPassword,
        name: newName
    });
    
    user.save();

    res.status(200).send({
        "message" : "SignUp Complete!",
    });
});

app.post("/signin",async (req,res)=>{
    const newUsername = req.headers.username;
    const newPassword = req.headers.password;
    const newName = req.body.name;

    const existing = await User.findOne({username:newUsername});

    if(!existing){
        res.status(400).send({
            "message":"User doesn't exits"
        })
    }

    var token = jwt.sign({username:newUsername},jwtPassword);
    return res.json({
        token,
    });
});

app.get("/user", async (req,res)=>{
    const token = req.headers.auth;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const decodedUsername = decoded.username;

        console.log(decodedUsername);

        const allUsers= await User.find({},'username');
        

        const otherUsers = allUsers.filter((value)=>{
            if(value.username!=decodedUsername)return true;
            else return false;
        });
        
        res.send(otherUsers);
    }catch(err){
        return res.status(403).json({
            message: "Invalid Token!"
        })
    }
}); 

app.listen(port,()=>{
    console.log(`Server running on port - ${port}`)
});