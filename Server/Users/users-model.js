const mongose =require('mongoose');
const userScema=new mongose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        phone:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
    }
);

const userModel=new mongose.model("User",userScema); 
module.exports=userModel