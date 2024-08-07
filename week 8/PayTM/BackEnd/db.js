const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ashitoshsable09:9vc1QiVkes6KOXf6@ashitoshdb.gvstg6c.mongodb.net/?retryWrites=true&w=majority&appName=ashitoshdb/");

const PayTMSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
    },
    
})

const PayTMUser = new mongoose.model("PayTM", PayTMSchema);

module.exports = {PayTMUser};