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


