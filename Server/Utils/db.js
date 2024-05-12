const mongose= require('mongoose');
const uri='mongodb://localhost:27017';


const connect=async()=>{
    try{

await mongose.connect(uri);
console.log('connected');
    }
    catch(error){
        console.log(error);
    }
}
module.exports=connect;