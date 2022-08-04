const express = require("express") ;
const router = express.Router() ;
const User = require("../db/models/User") ;

router.post("/users" , async (req , res) => {
    const newUser = new User({ ...req.body }) ;
    try{
        await newUser.save() ;
        res.status(201).json({
            "message": "new user created with email : "+req.body.email ,
        })
    }catch(e){
        res.status(400).json({
            "message": "unable to create the user " + e ,
        })
    }
    // newUser.save().then((data) => {
    //     res.status(201).json({
    //         "message": "new user created with email : "+req.body.email ,
    //     })
    //     return ;
    // }).catch((error) => {
    //     res.status(400).json({
    //         "message": "unable to create the user " + error ,
    //     })
    // })
    
})

router.get("/users" , (req , res) => {
    User.find({}).then((data) => {
        res.status(200).json(data) ;
    }).catch((e) => {
        res.status(500).json({
            message: e ,
        })
    })
})

router.patch("/user/:id" , async (req , res) => {
    const updates = Object.keys(req.params) ;
    const _id = req.params.id
    try{
        const user = await User.findById(_id) ;
        if(!user){
            res.status(400).json({
                message: "user not found" ,
            })
        }
        updates.forEach((update) => {
            user[update] = req.params[update] ;
        })
        // const user = await User.findByIdAndUpdate(_id , req.body , { new: true , runValidators: true }) ;
        
        await user.save() ;
        res.status(200).send(user) ;
    }catch(e){
        res.status(400).send({
            "message": "error while updating the user info" + e 
        })
    }
})

router.get("/user/:id" , (req , res) => {
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




module.exports = router ;