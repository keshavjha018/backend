//connecting with mongoDB

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students")
.then(()=>{
    console.log("Connection successful...");
})
.catch((e)=>{
    console.log(e);
});