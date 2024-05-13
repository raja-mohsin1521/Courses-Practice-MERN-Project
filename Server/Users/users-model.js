const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Create the User model
const User = mongoose.model("User", userSchema);
userSchema.methods.generateToken=async function(){

}

module.exports = User;
