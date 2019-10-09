import React from "react";
import ReactDOM from "react-dom";
import SendMessage from '../presentational/SendMessage.js';
import Messages from '../presentational/Messages.js';
import Rooms from '../container/Rooms.js';

export default class MainWindow extends React.Component { 
    render() { 
        return (
        <div>
            <div className='main-messages-rooms'>
                <Rooms/>
                <Messages/>
            </div>
            <SendMessage/>           
        </div>
        );
    }
}


