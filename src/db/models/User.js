const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcrypt") ;

const userSchema = new mongoose.Schema({
    name:{
        type: String ,
    },
    email: {
        type: String ,
        unique: true ,
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

userSchema.statics.findByCredentials = async (email , password) => {
    console.log(email + " email password " + password)
    const user = await User.findOne({ email }) ;
    console.log(user) ;
    if(!user) throw new Error("user not found") ;
    const isMatch = await bcrypt.compare(password , user.password) ;
    console.log(isMatch) ;
    if(!isMatch) throw new Error(" in-correct password "+isMatch) ;
    return user ;
}

userSchema.pre("save" , async function(next){
    // here this refers to each user 
    console.log(this.password + "presave called ") ;
    // const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password , 8) ;
    next() ;
})

const User = mongoose.model("User" , userSchema);

module.exports = User