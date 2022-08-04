const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs") ;

const userSchema = new mongoose.Schema({
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
                return !value.toLowerCase().includes("password") ;
            },
            message: props => `${props.value} is not a valid Password!`
        },

    },
    age:{
        type: Number
    }
})

userSchema.pre("save" , async function(next){
    // here this refers to each user 
    
    this.password = await bcrypt.hash(this.password , 8) ;

    next() ;
})

const User = mongoose.model("User" , userSchema);

module.exports = User