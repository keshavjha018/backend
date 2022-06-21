// using router we create a separate file for routes

const express = require('express');
const Student = require("../models/students");
const router = new express.Router();


//1. POST => create new student

router.post("/Students", async(req,res)=>{
    try{
        const user = new Student(req.body);     // get data
        const createUser = await user.save();   //save in db
        res.status(201).send(createUser);

    }catch(e){res.status(400).send(e)}
});

//2. GET => read data from db
router.get("/Students", async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);

    }catch(e){res.send(e)}
})

// get particular students data-get by id
router.get("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;  //get id
        const studData = await Student.findById(_id);   //find
        res.send(studData);

    }catch(e){res.status(400).send(e)}
})

//DELETE
router.delete("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;  //get id
        const studData = await Student.findByIdAndDelete(_id);   //find
        res.send(studData);

    }catch(e){res.status(400).send(e)}
})

//PATCH - update data
router.patch("/Students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studData = await Student.findByIdAndUpdate(_id, req.body);
        res.send(studData);

    }catch(e) { res.status(404).send(e)}
})

module.exports = router;