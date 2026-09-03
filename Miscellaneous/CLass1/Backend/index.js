const express = require("express");
const app = express();

let port = 3000;

app.get("/register",(req,res)=>{
    let {user,name}=req.query;
    res.send(`Standard GET response ,Welcome user ${user}`);
});

app.post("/register",(req,res)=>{
    res.send("Standard POST response");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


