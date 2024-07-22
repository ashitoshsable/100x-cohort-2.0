const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashitoshsable09:9vc1QiVkes6KOXf6@ashitoshdb.gvstg6c.mongodb.net/?retryWrites=true&w=majority&appName=ashitoshdb/todos"); 
//ye env file me daal te he aise hi mat daal dena 


//schema
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})


//model
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}