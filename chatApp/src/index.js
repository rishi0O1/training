const express = require('express')
const path = require("path");
const http = require("http")
const socketIo = require("socket.io")

const app = express()
const server = http.createServer(app);
const io = socketIo(server);

const publicDir = path.join(__dirname , "../public");

app.use(express.static(publicDir));

// let count = 0;
io.on("connection" , (socket) => {
    console.log("new connection setup");
    
    socket.emit("welcomeMessage" , "wel-come new user");
    socket.on("message" , (message) => {
        console.log("new message here");
        io.emit("newMessage",message);
    });
    // socket.emit("countUpdate" , count);
    // socket.on("increment" , () => {
    //     count++;
    //     // socket.emit("countUpdate" , count); : we are emitting to single connection 
    //     io.emit("countUpdate" , count); // : we are emitting to every single connection 
    // })
})
    
const port = 3000
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})