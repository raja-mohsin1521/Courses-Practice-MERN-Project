const home = (req, res)=>{
    try{
        res.status(200).send('My First Router ');
    }
    catch(error){
console.log(error)
    }
}
const register =(req, res)=>{
    try{
        res.status(200).send('Register Page');
    }
    catch(error){
console.log(error)
    }
}
module.exports= {home,register};