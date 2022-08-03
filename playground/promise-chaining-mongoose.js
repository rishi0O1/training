require("../src/db/mongoose") ;
const { default: mongoose } = require("mongoose");
const Task = require("../src/db/models/Task") ;

// 62ea04c7ffd60d7684ed7318
const _id = mongoose.Types.ObjectId("62ea04c7ffd60d7684ed7318") ;
Task.deleteOne({_id}).then((data) => {
    console.log(data) ;
    return Task.find({}) ;
}).then((tasks) => {
    console.log(tasks) ;
}).catch((e)=>{
    conosle.log(e) ;
})