//for static website

const express = require('express');
const app = express();
const port = 8000;

//path for website folder
Path = `../public`;

app.use(express.static(Path));

app.get("/", (req,res)=>{
    res.send("hii");
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});