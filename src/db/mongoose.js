const mongoose = require('mongoose');
const {password: mongodbPassword , username: mongoUsername} = require('../../creadentials.json');

const dbName = encodeURIComponent("task-manager");
console.log(dbName) ;
const connectionUrl = `mongodb+srv://${mongoUsername}:${mongodbPassword}@cluster0.7hnf60k.mongodb.net/${dbName}?retryWrites=true&w=majority`
console.log(connectionUrl);
mongoose.connect(connectionUrl , (error , res) => {
    if(error){
        console.log("we have error in thhe conection of the DB" , error) ;
        return ;
    }
    console.log("connection successfulll !" ) ;
})

mongoose.SchemaTypes.String.set('trim', true);
mongoose.SchemaTypes.String.set('lowercase', true);



// const me = new User({ name: "rishij" , age: 123 , email: "rishij@gmail.com" , password: "password"}) ;
// me.save().then((res) => {
//     console.log(res) ;
// }).catch((error) => {
//     console.log(error) ;
// })



// const currentTask = new Task({
//     description: "  here i am new mongoose task" ,
//     completed: false,
// });

// currentTask.save().then((res) => {
//     console.log(res) ;
// }).catch((err) => {
//     console.log(err) ;
// })