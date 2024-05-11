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
        console.log(req.body)
        res.status(200).send({message:req.body});
    }
    catch(error){
console.log(error)
    }
}
module.exports= {home,register};