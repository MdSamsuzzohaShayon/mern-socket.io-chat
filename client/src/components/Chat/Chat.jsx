// https://reactjs.org/docs/hooks-effect.html
import React, { useState, useEffect } from 'react';
// https://socket.io/docs/client-api/
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;


const Chat =({location})=>{
    // https://reactjs.org/docs/hooks-overview.html
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = '127.0.0.1:5000';

    useEffect(()=>{
        // https://socket.io/docs/client-api/#With-a-custom-parser
        // GETTING URL BACK
        // const data = queryString.parse(location.search);
        const {name, room} = queryString.parse(location.search);
        // console.log(location.search);
        // console.log(data);
        // console.log(name, room);


        // https://github.com/socketio/socket.io-client
        socket = io(ENDPOINT);
        console.log(socket);
        

        setName(name);
        setRoom(room);
        
        // https://socket.io/get-started/chat/#Emitting-events
        socket.emit('join', {name, room}, (error )=>{
            // console.error(error ) ;
            alert(error );
        });

    }, [ENDPOINT, location.search]);



    return (
        <h1>Chat</h1>
    );
}

export default Chat;