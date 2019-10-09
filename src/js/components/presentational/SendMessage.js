import React from 'react';
import { connect } from 'react-redux';
import {messageSent} from '../../../actions/messageActions.js';
const SendMessage = (props) => (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log('from sndmsg: ' + e.target.elements.messageWritten.value.trim());
            props.dispatch(messageSent(e.target.elements.messageWritten.value.trim()));
        }}>
            <input type='text' name='messageWritten'></input>
            <button>send</button>
        </form>
    </div>
);

export default connect()(SendMessage);
