const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model("User" , {
    name:{
        type: String ,
    },
    email: {
        type: String ,
        required: [true , "Email not provides"] ,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: props => `${props.value} is not a valid Email!`
        }
    },
    password: {
        type: String,
        required: [true , "password is not provided by the user"] ,
        validate: {
            validator: function(value){
                return value.toLowerCase().includes("password") ;
            },
            message: props => `${props.value} is not a valid Password!`
        },

    },
    age:{
        type: Number
    }
});

module.exports = User