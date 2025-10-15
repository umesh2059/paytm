const express = require("express");
const connectDB = require("./db");

const app=express();


app.get('/',(req,res)=>{
  res.send("mongodb connected successfully")
})

app.listen(3000,()=>{
        console.log("server started on port 3000")
})