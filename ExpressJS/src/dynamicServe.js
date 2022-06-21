// serving dynamic website using express
// dynamic -> changes with change of user

//use TEMPLATE Engine

const express = require('express');
const app = express();
const port = 8000;

//path for website folder
const path = require("path");
const staticPath=path.join(__dirname,"../views");

// set view engine
app.set("view engine", "hbs");
app.set('views',staticPath);

//engine route
app.get("/", (req, res)=>{
    res.render('index', {
        text: "HELLO WORLD !"
    });
})

//error page [optional] [when req is anything diff]
app.get("*", (req,res)=>{
    res.render("errPage");
})


app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});