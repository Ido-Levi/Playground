import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import msgReducer from './reducers/messageReducer.js';
import roomReducer from './reducers/roomsReducer.js'
import { messageRecieved, refreshMessages } from './actions/messageActions.js';
import MainWindow from './js/components/container/MainWindow.js';
import io from 'socket.io-client';
import './styles/styles.scss';

const store = createStore(combineReducers({
    messages: msgReducer,
    rooms: roomReducer
}));

const socket = io.connect('http://127.0.0.1:5000');

const channels = ['foods', 'drinks', 'tech'];

let currentRoom = 'foods';

socket.on('connect', () => {
    socket.send('User has connected!');
});

socket.on('message', (msg) => { 
    console.log('MESSAGE HAS RECEIVED ON CLIENT! ' + msg);
    console.log('msgrc + ');
    console.log(msg);
    if(msg[0] === currentRoom) {
        store.dispatch(messageRecieved(msg));
    }
});

store.subscribe((state) => {
    if(store.getState().messages.type === 'SendMessage') { 
        console.log("Message sent!");
        socket.send( {'message':store.getState().messages.msg, 'channel': currentRoom} );
    }

    if(store.getState().rooms.type === 'changeRoom' && store.getState().messages.type !== 'SendMessage' )  { 
        console.log("Change room!");
        currentRoom = store.getState().rooms.room;

        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if(xmlHttp.responseText.length > 1) {
                console.log(xmlHttp.responseText);
                const msgsRec = JSON.parse(xmlHttp.responseText);
                store.dispatch(refreshMessages(msgsRec));
            }
        };
        xmlHttp.open("GET", 'http://127.0.0.1:5000/' + currentRoom, true);
        xmlHttp.send(null);

    }
});

const jsx = (
    <Provider store={store}>
      <MainWindow />
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("app"));