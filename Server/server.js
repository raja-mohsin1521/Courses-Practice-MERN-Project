const express= require("express");
const app =express();
const router = require("./Router/auth-router")
const connectdb = require('./Utils/db')
const errmiddleware=require("./Middleware/defaultError")
app.use(express.json())

app.use(errmiddleware)

app.use("/api/auth",router);
const port =5000;
connectdb().then(()=>{
    app.listen(port ,() =>{
        console.log(`Server is runnig at port ${port}`);
    });
})


