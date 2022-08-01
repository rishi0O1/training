const express = require('express');
const path = require('path');
const app = express() ;

const publiDirPath = path.join(__dirname , "../public") ;

app.use(express.static(publiDirPath)) ;

app.get("/weather" , (req , res) => {
    res.send("weather route")
})

app.get("/about" , (req , res) => {
    res.send("about route")
})

app.listen(3001 , () => {
    console.log("server startted at port 3000")
})
