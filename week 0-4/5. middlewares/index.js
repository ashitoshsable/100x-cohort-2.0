const express = require("express");
const app = express();
const port = 3000;

app.get("/hospital",(req,res)=>{
    const kidneys = req.query.kidney;
    const user = req.headers.username;
    const pass = req.headers.password;

    if(user!="Ashitosh" || pass!="Sable"){
        res.json({
            "response":"Authentcation error!",
        })
        return;
    }

    if(kidneys!=1 && kidneys!=2){
        res.json({
            "respnse":"You are not a human!",
        })
        return;
    }
    res.json({
        "msg":"You are fine!",
    })
});

app.listen(port,()=>{
    console.log(`Server is running on port - ${port}`)
}); 
