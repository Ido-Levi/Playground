import React from 'react';
import { connect } from 'react-redux';

let roomNameC = '';

const Room = (props) => (
    <div>
        <button name="rooom-name" onClick={()=>roomNameC = props.roomName}>   {props.roomName && '  Room'}</button>
    </div>
);

const mapStateToProps = state => { 
    return {
        ...state,
        room: roomNameC
    };
};


export default connect(mapStateToProps)(Room);