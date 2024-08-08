const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { JWT_SECRET }= require('../config');
const router = express.Router();
const { PayTMUser, PayTMAccount } = require('../db');
const { authMiddleware } = require('../middleware');

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
});

router.post("/signup",async (req,res)=>{
    const body=req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Signup Failed."
        });
    }

    const existingUser = PayTMUser.findone({
        username: body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Username is already in use."
        })
    }

    const newUser = await PayTMUser.create(body);

    const userId= newUser._id;

    await PayTMAccount.create({
        userId:userId,
        balanace: 1+Math.random()*10000

    })


    const token  = jwt.sign({
        userId:newUser._id
    }, JWT_SECRET);

    res.json({
        message:"User account created Successfully!",
        token: token
    });

});

const signinSchema = zod.object({
    username:zod.string(),
    password:zod.string()
});

router.post("/signin", async (req,res)=>{
    const body=req.body;
    const {success} = signinSchema.safeParse(body);

    if(!success){
        res.status(411).json({
            message:"Invalid Inputs!"
        });
    }

    const user = await PayTMUser.findone({
        username:body.username,
        password:body.password
    });

    if(!user){
        res.status(411).json({
            message:"The user doesn't exists!"
        });
    }

    const token = await jwt.sign({
        userId:user._id
    },JWT_SECRET);

    res.status(200).json({
        message:"Signin Completed!",
        token:token
    });
    return;
})

const userCheck = zod.object({
    firstname:zod.string().optional(),
    lastname:zod.string().optional(),
    password:zod.string().optional()
});

router.put("/", authMiddleware, async (req, res)=>{
    const body = req.body;
    const {success} = userCheck.safeParse(body);

    if(!success){
        res.status(411).json({
            message:"Invalid Inputs"
        });
    }
    
    await PayTMUser.updateOne(body,{
        id:req.userId
    });

    res.status(200).json({
        message:"Updated Successfully!"
    })
});

router.get("/bulk", async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await PayTMAccount.find({
        $or:[{
            firstname:{
                "$regex":filter,
            }
        },{
            lastname:{
                "$regex":filter,
            }
        }]
    });

    res.send(200).json({
        user:users.map(user=>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = {
    router
}