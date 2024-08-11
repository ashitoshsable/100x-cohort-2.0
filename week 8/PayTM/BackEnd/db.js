const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ashitoshsable09:9vc1QiVkes6KOXf6@ashitoshdb.gvstg6c.mongodb.net/?retryWrites=true&w=majority&appName=ashitoshdb/paytm");

const PayTMUserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    firstname: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    
})

const PayTMAccountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PayTMUser',
        required: true
    },
    balance:{
        type: Number,
        required:true
    }
});

const PayTMUser = new mongoose.model('PayTMUser', PayTMUserSchema);
const PayTMAccount = new mongoose.model('PayTMAccount',PayTMAccountSchema);

module.exports = {
    PayTMUser,
    PayTMAccount
};