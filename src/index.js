require("./db/mongoose") ;
const express = require('express');
const app = express() ;
const User = require("./db/models/User") ;
const Task = require("./db/models/Task") ;
const { default: mongoose } = require("mongoose");

const port = process.env.PORT || 3000 ;
app.use(express.json()) // converting the body to json 

app.post("/users" , (req , res) => {
    console.log({ ...req.body })
    const newUser = new User({ ...req.body }) ;
    newUser.save().then((data) => {
        res.status(201).json({
            "message": "new user created with email : "+req.body.email ,
        })
        return ;
    }).catch((error) => {
        res.status(400).json({
            "message": "unable to create the user " + error ,
        })
    })
    
})

app.get("/users" , (req , res) => {
    User.find({}).then((data) => {
        res.status(200).json(data) ;
    }).catch((e) => {
        res.status(500).json({
            message: e ,
        })
    })
})

app.get("/user/:id" , (req , res) => {
    let userID = req.params.id ;
    // userID = mongoose.Types.ObjectId(userID)
    User.findById(userID).then((data) => {
        if(!data){
            res.status(400).send({
                message: "unable to find the user"
            }) ;
            return ;
        }
        console.log("test 123 " + data) ;
        res.status(200).json(data) ;
    }).catch((e) => {
        res.status(500).send(e) ;
    })
})

app.get("/task" , (req , res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks) ;
    }).catch((e) => {
        res.status(500).send() ;
    })
})

app.get("/task/:id" , (req , res) => {
    const taskId = req.params.id ;
    Task.findById(taskId).then((task) => {
        if(!task){
            res.status(400).send(task) ;
        }
        res.status(200).send(task) ;
    }).catch((e) => {
        res.status(500).send() ;
    })
})

app.post("/task" , (req , res) => {
    const newTask = new Task({ ...req.body }) ;
    newTask.save().then((task) => {
        res.status(201).json(task) ;
    }).catch((error) => {
        res.status(400).json(error) ;
    })
})

app.listen(port , () => {
    console.log("express started at port : " + port)
})