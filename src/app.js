import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import msgReducer from './reducers/messageReducer.js';
import roomReducer from './reducers/roomsReducer.js'
import { messageRecieved } from './actions/messageActions.js';
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
    store.dispatch(messageRecieved(msg));
});

store.subscribe((state) => {
    if(store.getState().type === 'SendMessage') { 
        socket.send( {'message':store.getState().msg, 'channel': currentRoom} );
    }

    if(store.getState().type === 'CHANGE_ROOM') { 
        currentRoom = store.getState().room;
    }

    console.log('***************');
});

const jsx = (
    <Provider store={store}>
      <MainWindow />
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById("app"));