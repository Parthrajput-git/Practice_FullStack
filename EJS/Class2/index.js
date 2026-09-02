const express = require("express");
const app = express();
let path=require("path");

let port = 3000;

app.set("views engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username",(req,res)=>{
    let{username}=req.params;
    res.render("instagram.ejs",{username}); 
});

app.get("/", (req, res) => {
    res.send("This is  home page");
});


// This is home 
app.get("/home",(req,res)=>{
  res.render("home.ejs")
});

app.listen(port, () => {
    console.log(`Linting request on port ${port}`);

});

