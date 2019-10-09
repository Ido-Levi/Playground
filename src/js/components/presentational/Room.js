import React from 'react';

const Room = (props) => (
    <div>
        <label name="users-on">{props.usersOn && '0/0'}</label>
        <label name="rooom-name">   {props.roomName && '  Room'}</label>
    </div>
);

export default Room;