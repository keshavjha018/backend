const express = require('express');

require("./db/connection");                     //connect db
const Student = require("./models/students");   //connect schema

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

//1. POST => create new student

app.post("/Students", async(req,res)=>{
    try{
        const user = new Student(req.body);     // get data
        const createUser = await user.save();   //save in db
        res.status(201).send(createUser);

    }catch(e){res.status(400).send(e)}
});

//2. GET => read data from db
app.get("/Students", async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);

    }catch(e){res.send(e)}
})

// get particular students data-get by id
app.get("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;  //get id
        const studData = await Student.findById(_id);   //find
        res.send(studData);

    }catch(e){res.status(400).send(e)}
})

//DELETE
app.delete("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;  //get id
        const studData = await Student.findByIdAndDelete(_id);   //find
        res.send(studData);

    }catch(e){res.status(400).send(e)}
})

//PATCH - update data
app.patch("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studData = await Student.findByIdAndUpdate(_id, req.body);
        res.send(studData);

    }catch(e) { res.status(404).send(e)}
})

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
})