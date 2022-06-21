const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>HOME</h1>");
});

app.get("/about", (req,res)=>{
    res.send("<h1>About</h1>");
});

app.get("/temp", (req,res)=>{
    res.send("<h1>temp</h1>");
});

app.listen(7000,()=>{
    console.log("listening port 7000");
});