const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
} = require('./users');

const app = express();
const PORT = process.env.PORT || 5000;


// https://nodejs.org/dist/latest-v13.x/docs/api/http.html
// https://socket.io/docs/#Using-with-Node-http-server
const server = http.createServer(app);
const io = socketio(server);


// https://nodejs.org/dist/latest-v12.x/docs/api/events.html#events_emitter_on_eventname_listener
// AT FIRST USER WILL BE CONNECTED
// https://socket.io/get-started/chat/
io.on('connection', (socket) => {
    // console.log("we have a new connection!!!");

    socket.on('join', ({
        name,
        room
    }, callback) => {
        // console.log(name);
        // console.log(room);

        /*
        const error = true;

        if(error){
            callback({error : 'error'});
        }
        */

        const {error, user} = addUser({id: socket.id, name, room});
        if(error ) return callback(error);

        // WELCOMING USER
        // https://socket.io/docs/#Broadcasting-messages
        socket.emit('message', {user: 'admin', text: `${user.name}, Welcome to the room ${user.room}`});
        
        // https://socket.io/docs/#Broadcasting-messages // BROADCAST WILL SEND ALL USER EXCEPT SPECFIC 
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`})

        socket.join(user.room);

        callback(); 
    });

    // EVENT FOR USER GENERATED MESSAGE
    socket.on('sendMessage', (message, callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});
        callback();
    })

    



    // WHEN USER WILL BE DISCONNECTED
    socket.on('disconnect', () => {
        console.log("User had left");
    })
});


app.use(router);

server.listen(PORT, () => console.log(`Server is running on \n
 127.0.0.1:${PORT}`));