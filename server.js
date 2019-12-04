const express = require('express');
const app =  express();
const port = 3000;
const http = require('http').createServer();

// https://socket.io/docs/server-api/#new-Server-httpServer-options
const io = require('socket.io')(http);

// https://socket.io/get-started/chat/
io.on('connection', (socket)=>{
    socket.emit("welcome", "Hello there welcome to the socket io server");
});


http.listen(port, ()=>{
    console.log("server is running on 127.0.0.1:"+port);
    
}); 
