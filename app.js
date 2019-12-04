// https://socket.io/docs/client-api/
const io = require('socket.io-client');




/*
// const socket = io.connect('http://127.0.0.1:3000');

socket.on('welcome', (data)=>{
    console.log("Receved", data);  // when we run node app.js like this it wil give us the message but node server.js need to run
    console.log("new client is connected");
});*/



/*
// const socketgames = io.connect('http://127.0.0.1:3000/games');

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
*/




let chat = io.connect('http://127.0.0.1:3000/chat');

const username = 'mdshayon';

const sendMessage = ()=>{
    // GET THE INPUT
    let input = document.getElementById("chat-input");
    let msg = input.value;
    input.value = '';
    chat.emit('newMsg', {username, msg, })
    console.log("Message: "+msg);  
};

chat.on("newMessage", (data)=>{
    console.log("New Message: ", data.username, data.msg);
    
});


// SUBMIT BUTTON
const btn = document.getElementById('submitBtn');

btn.onclick = () =>{
    sendMessage();
}




