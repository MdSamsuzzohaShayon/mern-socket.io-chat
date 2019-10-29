import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css'


const Join =()=>{
    // https://reactjs.org/docs/hooks-overview.html
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div><input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)} className="joinInput"/></div>
                <div><input type="text" placeholder="Room" onChange={(event)=>setRoom(event.target.value)} className="joinInput mt-20"/></div>
                {/* SUBMIT AND REDIRECT */}
                <Link onClick={(event)=>(!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;