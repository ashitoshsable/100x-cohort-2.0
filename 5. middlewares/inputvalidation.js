const express = require("express");
const app = express();
app.use(express.json());

const port=3000;

app.post("/patient",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("You have "+kidneysLength+" kidneys with you.");
})

app.listen(port,()=>{
    console.log("Server is running on "+port)
});