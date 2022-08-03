const mongodb = require('mongodb');

const {password: mongodbPassword , username: mongoUsername} = require('./creadentials.json');
const dbName = "task-manager"
const connectionUrl = `mongodb+srv://${mongoUsername}:${mongodbPassword}@cluster0.7hnf60k.mongodb.net/?retryWrites=true&w=majority`
const MongodbClient = mongodb.MongoClient

MongodbClient.connect(connectionUrl , {useNewUrlParser: true} , async (error , client) => {
    if(error){
        return console.error("unable to connect to DB")
    }
    console.log("connection success to DB")
    const db = client.db(dbName)
    // db.collection("tasks").find({ completed: false }).toArray().then((data) => {
    //     
    //     console.log(data) ;
    // })

    db.collection("tasks").updateMany({
        completed: false 
    } , {
        $set: {
            completed: true ,
        }
    }).then((data) => {
        console.log(data) 
    }).catch((error) => {
        console.log(error) ;
    })

})