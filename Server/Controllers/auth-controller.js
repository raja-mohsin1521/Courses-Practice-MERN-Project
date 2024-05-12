const userModel=require('../Users/users-model')
var bcrypt = require('bcryptjs');


const home = (req, res)=>{
    try{
        
        res.status(200).send('My First Router ');
    }
    catch(error){
console.log(error)
    }
}
const register =async(req, res)=>{
    
    try{

        const{username,email,phone,password,isAdmin}=req.body
        const userExist =await userModel.findOne({email})
     
       
        if(userExist){
            console.log('User Exists')
        }
        else{
            var salt = bcrypt.genSaltSync(10);
            var hashpassword = await bcrypt.hashSync(password, salt);
            await userModel.create({username,email,phone,password:hashpassword,isAdmin})
            console.log('Done')
        res.status(200).send({message:req.body});
        }
      
       
        
    }
    catch(error){
console.log(error)
    }
}
module.exports= {home,register};