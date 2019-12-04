// https://socket.io/docs/client-api/
const io = require('socket.io-client');

const socket = io.connect('http://127.0.0.1:3000');

socket.on('welcome', (data)=>{
    console.log("Receved", data);  // when we run node app.js like this it wil give us the message but node server.js need to run
    
});