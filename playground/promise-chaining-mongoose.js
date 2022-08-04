require("../src/db/mongoose") ;
const { default: mongoose } = require("mongoose");
const Task = require("../src/db/models/Task") ;

// 62ea04c7ffd60d7684ed7318
// const _id = mongoose.Types.ObjectId("62ea04c7ffd60d7684ed7318") ;
// Task.deleteOne({_id}).then((data) => {
//     console.log(data) ;
//     return Task.find({}) ;
// }).then((tasks) => {
//     console.log(tasks) ;
// }).catch((e)=>{
//     conosle.log(e) ;
// })

const deleteTaskandCount = async (id) => {
    if(!id) throw new Error("Id not Found") ;
    const res = await Task.findByIdAndDelete(id) ;
    const count = await Task.count() ;

    return count
}

deleteTaskandCount("62ea0554ffd60d7684ed731a").then((count) => {
    console.log(count) ;
}).catch((error) => {
    console.log("error found") ;
})