const userModel=require('../Users/users-model')
const contactModel=require('../Users/contact-model')
var bcrypt = require('bcryptjs');


const home = (req, res)=>{
    try{
        
        res.status(200).send('My First Router ');
    }
    catch(error){
console.log(error)
    }
}

const about= (req, res)=>{
    try{
        
        res.status(200).send('My About ');
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
            res.status(200).json({ message: 'User Exist '  })
        }
        else{
            var salt = bcrypt.genSaltSync(10);
            var hashpassword = await bcrypt.hashSync(password, salt);
          const userCreated=  await userModel.create({username,email,phone,password:hashpassword,isAdmin})
            console.log('Done')
            const token = await userCreated.generateToken(); // Call generateToken on userCreated
            res.status(200).json({ message: 'Signup Succesfull', token });
        }
      
       
        
    }
    catch(error){
console.log(error)
    }
}



const login = async (req, res) => {
    try {
        const { email, password, isAdmin } = req.body;
        const userExist = await userModel.findOne({ email });
        console.log(req.body);

        if (!userExist) {
            return res.status(200).json({ message: 'Invalid Credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            if(userExist.isAdmin){
                console.log('Login Successfully as adimin');
                const token = await userExist.generateToken();
                return res.status(200).json({ message: 'Login Successfully as admin', token });
            }
          else{
            console.log('Login Successful');
            const token = await userExist.generateToken();
            const userId = await userExist._id;
            return res.status(200).json({ message: 'Login Successful ', token , userId });
          }
        }
         else {
            return res.status(200).json({ message: 'Invalid Password' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}
const contact=async (req,res)=>{
try {
const {email,phone,message}=req.body
const sendMessage=await contactModel.create({email,phone,message})
res.status(200).json({
    messsage:'Message Sent'
})
}
catch(error){
   console.log('error')
}
}

module.exports= {home,register,about,login,contact};