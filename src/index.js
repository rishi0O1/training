require("./db/mongoose") ;
const express = require('express');
const app = express() ;
const userRouter = require("./router/userRouter") ;
const taskRouter = require("./router/taskRouter") ;

const port = process.env.PORT || 3000 ;

app.use(express.json()) // converting the body to json 
app.use(userRouter) ;
app.use(taskRouter) ;


app.listen(port , () => {
    console.log("express started at port : " + port)
})

// const jwt = require('jsonwebtoken');

// const test = function(){
//     const token = jwt.sign({ _id: "rishijraj" } , "rishijraj" , { expiresIn: "111 seconds" }) ;
//     console.log(token) ;
//     console.log(jwt.verify(token , "rishijraj")) ;
// }
// test() ;
