const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const JWT_SECRET= require('../config');
const router = express.Router();
const PayTMUser = require('../db');

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
});

router.post('/signup',async (req,res)=>{
    const body=req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            message: "Signup Failed."
        })
    }

    const user = PayTMUser.findone({
        username: body.username
    })

    if(user._id){
        return res.json({
            message: "Username is already in use."
        })
    }

    const newUser = await PayTMUser.create(body);
    const token  = jwt.sign({
        userId:newUser._id
    }, JWT_SECRET);

    res.json({
        message:"User account created Successfully!",
        token: token
    });

});

module.exports = {
    router
}