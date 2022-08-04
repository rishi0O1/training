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

// const bcrypt = require("bcryptjs") ;
// (async function(){
//     const hashPass = '$2a$08$3sandwfmmgeottqpjl6.2ozdgqltlugpowbbggowq4w1wv4hlwhs.' ;
//     const pass = "rishij" ;
//     console.log(await bcrypt.hash(pass , 8)) ;
//     console.log(await bcrypt.compare(pass , hashPass)) ;
// })();
