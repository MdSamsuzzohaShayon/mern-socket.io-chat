// https://reactjs.org/docs/hooks-effect.html
import React, {
    useState,
    useEffect
} from 'react';
// https://socket.io/docs/client-api/
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Message from '../Message/Message';
import './Chat.css';

let socket;


const Chat = ({location}) => {
    // https://reactjs.org/docs/hooks-overview.html
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = '127.0.0.1:5000';

    useEffect(() => {
        // https://socket.io/docs/client-api/#With-a-custom-parser
        // GETTING URL BACK
        // const data = queryString.parse(location.search);
        const {
            name,
            room
        } = queryString.parse(location.search);
        // console.log(location.search);
        // console.log(data);
        // console.log(name, room);


        // https://github.com/socketio/socket.io-client
        socket = io(ENDPOINT);
        // console.log(socket);


        setName(name);
        setRoom(room);

        // https://socket.io/get-started/chat/#Emitting-events
        socket.emit('join', {
            name,
            room
        }, () => {
            // console.error(error ) ;
            // alert(error );
        });


        // UNMOUNT OR DISCONNECT EFFECT 
        return () => {
            socket.emit('disconnect');
            socket.off();
        };

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);



    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);


    return ( 
        <div className = "outerContainer" >
            <div className="container">
            <InfoBar room={room} />
            <Messages messages={messages} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                {/* <input type = "text"
                value = {message}
                onChange = {(event) => setMessage(event.target.value)}
                onKeyPress = {event=> event.key === "Enter" ? sendMessage(event) : null}/>  */}
            </div>
        </div>
    );
}

export default Chat;