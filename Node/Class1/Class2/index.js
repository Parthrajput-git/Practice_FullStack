const figlet = require("figlet");

figlet("Hey Programrs", (err, data) => {
    if (err) {
        console.log("Something went wrong...");
        console.log(err);
        return;
    }
    console.log(data);
});

// second is import // import {sum} from "./file" ; and right pack-json right type is module