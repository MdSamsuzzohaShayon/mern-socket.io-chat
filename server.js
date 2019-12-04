const express = require('express');
const app =  express();
const port = 3000;
const http = require('http').createServer();

// https://socket.io/docs/server-api/#new-Server-httpServer-options
const io = require('socket.io')(http);

// https://socket.io/get-started/chat/
/*
io.on('connection', (socket)=>{
    socket.emit("welcome", "Hello there welcome to the socket io server");
});
*/







/*
// ROUTING THOUGH SOCKET
// https://socket.io/docs/rooms-and-namespaces/
const gameRooms = ["rocket league", "csgo", 'bt1'];
io.of('/games').on('connection', (socket)=>{
    console.log("New client");
    socket.emit('welcome', "Hello welcome to the games");

    // https://socket.io/docs/rooms-and-namespaces/#Joining-and-leaving
    socket.on("joinRoom", (room)=>{
        if(gameRooms.includes(room)){
            socket.join(room);
            io.of('/games').in(room).emit('newUser', "new player has joined the room "+ room)
            socket.emit("success", "You have join to room successfully ")
        }else{
            return socket.emit("err", "No Room Names " + room );
        }
    });


    // https://socket.io/get-started/chat/#Integrating-Socket-IO
    // https://socket.io/docs/server-api/#socket-disconnect-close
    socket.disconnect()
});
*/







io.of('/chat').on('connection', (socket)=>{
    socket.on('newMsg', (data)=>{
        console.log("new message receved from the user: "+data.username+" : "+data.msg);
    });
});








http.listen(port, ()=>{
    console.log("server is running on 127.0.0.1:"+port);
}); 

