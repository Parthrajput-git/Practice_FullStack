const express = require("express");
const app = express();

// console.log(app);

let port = 3000;

app.listen(port, () => {
    console.log(`App is listing to port ${port}`);

});

app.get("/", (req, res) => {
    res.send("THis is a basic respone");
});

app.get("/search",(req,res)=>{
   let {q}=req.query;
   res.send(`This is a search page with query ${q}`);
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`Hii, this is a page of @ ${username} with id ${id}`);
});



app.get("/name", (req, res) => {
    res.send("Class name is 12th");
});


app.get("/student", (req, res) => {
    res.send("Student name is Sem cute");
});

app.post("/",(req,res)=>{
   res.send(" This is a post request ");
   
});


app.get("*", (req, res) => {
    res.send("This page is not found");
});


// app.use((req,res)=>{
//     console.log("Request was received");
//     // res.send("This is a basic response");
//     let code="<h1>Class</h1> <ul> <li>Sem</li> <li>212</li> </ul>"
//     res.send(code);
// });


