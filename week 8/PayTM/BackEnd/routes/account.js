const express = require('express');
const { authMiddleware } = require('../middleware');
const { PayTMAccount } = require('../db');
const { default:mongoose } = require('mongoose');

const router = express.router();

router.get("/balanace", authMiddleware, async (req,res)=>{
    const user = PayTMAccount.findOne({
        userId:req.userId
    });

    res.status(200).json({
        balance:user.balance,
        message:"Balance fetched Successfully!"
    });
});

router.post("/transfer", authMiddleware, async (req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to} = req.body;

    const user = await PayTMAccount.findOne({
        userId:req.userId
    }).session(session);

    if(!user){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid Account!"
        })
    }

    if(user.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"insufficient Balance!"
        })
    }

    const receiverAccount = await PayTMAccount.findOne({
        userId:to
    }).session(session);

    if(!receiverAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid Account!"
        })
    }

    await PayTMAccount.updateOne({
        userId:req.userId,
    
    },{
        $inc:{balance:-amount}
    }).session(session);

    await PayTMAccount.updateOne({
        userId:to,
    
    },{
        $inc:{balance:amount}
    }).session(session);

    await session.commitTransaction();

    res.status(200).json({
        message:"Transfer Sucessful!"
    });

});

module.exports = {
    router
};