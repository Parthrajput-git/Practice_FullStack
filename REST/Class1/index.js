const express = require("express");
const app = express();
const path=require("path");

let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts=[
    {
        username: "John Doe",
        content: "This is a sample post content.",
    },
     {
        username: "Miro comem",
        content: "I am a programmer and I love coding.",
    },
     {
        username: "Sem vinore",
        content: "I am a student and I love learning.",
    }
]

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});