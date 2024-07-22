const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./database");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    res.json(todos)
});

app.post("/todo",async (req,res)=>{
    const todoinfo = req.body;
    const isCorrect = createTodo.safeParse(todoinfo);
    if(!isCorrect.success){
        res.status(401).send({
            msg: "invalid inputs!"
        })
        return;
    }

    await todo.create({
        title : todoinfo.title,
        description : todoinfo.description,
        completed : false
    })

    res.json({
        msg : "todo created!"
    })
});

app.put("/completed",async (req,res)=>{
    const todoinfo = req.body;
    const isCorrect = updateTodo.safeParse(todoinfo);
    if(!isCorrect.success){
        res.status(401).send({
            msg: "invalid inputs!"
        })
        return;
    }
    await todo.update({
        _id:todoinfo._id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked sucessfully",
    })
});

app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
});