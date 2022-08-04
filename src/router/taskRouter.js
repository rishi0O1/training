const express = require("express") ;
const router = express.Router() ;
const Task = require("../db/models/Task") ;


router.patch("/task/:id" , async (req , res) => {
    const updates = Object.keys(req.body) ;
    console.log(updates) ;
    const _id = req.params.id
    try{
        // const task = await Task.findByIdAndUpdate(_id , req.body , { new: true , runValidators: true }) ;
        const task = await Task.findById(_id) ;
        if(!task){
            res.status(400).json({
                message: "task not found" ,
            })
            return ;
        }
        updates.forEach((update) => {
            task[update] = req.body[update] ;
        })
        console.log(task) ;
        await task.save() ;

        console.log(task) ;
        res.status(200).json(task) ;
    }catch(e){
        console.log("here i am the error" + e) ;
        res.status(400).json({
            "message": "error while updating the task info" + e 
        })
    }
})



router.get("/task" , (req , res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks) ;
    }).catch((e) => {
        res.status(500).send() ;
    })
})


router.get("/task/:id" , (req , res) => {
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

router.post("/task" , (req , res) => {
    const newTask = new Task({ ...req.body }) ;
    newTask.save().then((task) => {
        res.status(201).json(task) ;
    }).catch((error) => {
        res.status(400).json(error) ;
    })
})


module.exports = router