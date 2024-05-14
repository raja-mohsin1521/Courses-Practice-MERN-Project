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
const JWT_SECRATE_Key='abcd';
// Create the User model
const User = mongoose.model("User", userSchema);
userSchema.methods.generateToken=async function(){
try{
return jwt.sign({
    userID:this._id.toString(),
    email:this.email,
    isAdmin: this.isAdmin,
    
},
JWT_SECRATE_Key,
{
expiresIn:'30d'
}



)
}
catch(error){
    console.log(error)
}
}

module.exports = User;
