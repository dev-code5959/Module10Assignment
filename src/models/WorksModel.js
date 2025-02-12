const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    classNote:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "inactive",
    },
    email:{
        type: String,
        required: true,
    }
},{versionKey:false});


const WorkModel = mongoose.model('works', workSchema);
module.exports.WorkModel = WorkModel;