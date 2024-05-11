const express= require("express");
const app =express();
const router = require("./Router/auth-router")
const connectdb = require('./Utils/db')




app.use(express.json());
app.use("/api/auth",router);

connectdb().then(()=>{
    app.listen(port ,() =>{
        console.log(`Server is runnig at port ${port}`);
    });
})

const port =5000;
