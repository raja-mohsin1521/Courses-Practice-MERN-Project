const errorMiddleware=(err,res,req,next)=>{
const status= err.status|500;
const messsage=err.messsage | "Backend Error";
const extraDetails=err.extraDetails |"Eroor"
}
module.exports=errorMiddleware