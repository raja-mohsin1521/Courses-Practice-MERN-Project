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
            console.log('User Exists')
        }
        else{
            var salt = bcrypt.genSaltSync(10);
            var hashpassword = await bcrypt.hashSync(password, salt);
          const userCreated=  await userModel.create({username,email,phone,password:hashpassword,isAdmin})
            console.log('Done')
            const token = await userCreated.generateToken(); // Call generateToken on userCreated
            res.status(200).json({ message: req.body, token });
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
            console.log('Login Successful');
            const token = await userExist.generateToken();
            return res.status(200).json({ message: 'Login Successful', token });
        } else {
            return res.status(200).json({ message: 'Invalid Password' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}


module.exports= {home,register,about,login};