import React from 'react';
import { connect } from 'react-redux';

const Messages = (props) => (
    <div className='messages-style'>
    <h1>{props.msgs && props.msgs[0]} room</h1>
    {props.msgs && props.msgs.length === 0 && <p>There are no messages.</p> }
       <ul id='messages-place'>
        {props.msgs && props.msgs.length > 0 && props.msgs.slice(1,props.msgs.length).map((msg) => {return <li key={msg}>{msg}</li>;})}
       </ul>
    </div>
);


const mapStateToProps = (state) => {
    console.log("Aaaaa");
    return {
      msgs: state.messages.msgs
    };
  };

export default connect(mapStateToProps)(Messages);
