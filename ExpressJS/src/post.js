const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
// const i = require("/index.html")


// app.set("view engine", "html");

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.post("/",(req,res) =>{
    // const {n1,n2} = req.body;
    console.log(req.body);
})


app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});