const express = require('express');

require("./db/connection");                     //connect db
const Student = require("./models/students");   //connect schema
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const studentRouter = require("./routers/student-route");
app.use(studentRouter);

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
})