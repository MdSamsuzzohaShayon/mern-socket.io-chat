import React from 'react';
import './Input.css';



const InfoBar =({message, setMessage, sendMessage})=>(
    <form action="" className="form">
        <input type="text" 
            placeholder="Type a message..." 
            className="input"
            value = {message}
            onChange = {(event) => setMessage(event.target.value)}
            onKeyPress = {event=> event.key === "Enter" ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
    </form> 
);

export default InfoBar;