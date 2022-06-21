//Schema

const mongoose = require('mongoose');
const validator = require('validator');

const StudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:[true, "Email already Exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    phone: Number,
    address: String
})

//create new collection
const Student = new mongoose.model('Student', StudSchema);

module.exports = Student;