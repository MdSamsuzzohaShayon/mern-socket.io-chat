// https://socket.io/docs/client-api/
const io = require('socket.io-client');

// const socket = io.connect('http://127.0.0.1:3000');
const socketgames = io.connect('http://127.0.0.1:3000/games');

// socket.on('welcome', (data)=>{
//     console.log("Receved", data);  // when we run node app.js like this it wil give us the message but node server.js need to run
//     console.log("new client is connected");
// });


socketgames.on('welcome', (msg)=>{
    console.log("Receved:", msg); // Namespace Routing from server and showing in client
    
});

socketgames.emit("joinRoom", "rocket league", );


socketgames.on("newUser", res=>console.log(res));

socketgames.on("err", (err)=>{
    console.log(err);
});
socketgames.on("success", (data)=>{
    console.log(data);
});

