const express= require("express");
const app =express();
const router = require("./Router/auth-router")
app.use("/api/auth",router)

app.use("/api/auth/home",router)
app.get("/",(req,res)=>{
res.status(200).send('My First Server');
});
const port =5000;
app.listen(port ,() =>{
    console.log(`Server is runnig at port ${port}`);
})