const express= require("express");
const app =express();
app.get("/",(req,res)=>{
res.status(200).send('My First Server');
});
const port =5000;
app.listen(port ,() =>{
    console.log(`Server is runnig at port ${port}`);
})