const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    roll:{
        type: String,
        required: true,
    },
    class:{
        type: String,
        required: true,
    }


},{versionKey:false});



const StudentModel = mongoose.model('students', studentSchema);
module.exports = StudentModel;