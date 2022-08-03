const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model("Task" , {
    description: {
        type: String ,
        required: [true , "description not provided"],

    },
    completed: {
        type: Boolean ,
        default: false
    }
})

module.exports = Task ;