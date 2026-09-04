const express = require("express");
const app = express();

let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, name } = req.query;
    res.send(`Standard GET response ,Welcome user ${user}`);
});

app.post("/register", (req, res) => {
    // console.log(req.body);
    let {user,password}=req.body;
    res.send(`This user is ${user}`);
    // res.send("Standard POST response");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


