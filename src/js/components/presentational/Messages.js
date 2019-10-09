import React from 'react';
import { connect } from 'react-redux';

const Messages = (props) => (
    <div className='messages-style'>
    <button onClick={()=>{console.log(props.msgs)}}>a btn</button>
    {props.msgs && props.msgs.length === 0 && <p>There are no messages.</p> }
       <ul id='messages-place'>
        {props.msgs && props.msgs.length > 0 && props.msgs.map((msg) => {return <li key={msg}>{msg}</li>;})}
       </ul>
    </div>
);


const mapStateToProps = (state) => {
    console.log("Aaaaa");
    return {
      msgs: state.msgs
    };
  };

export default connect(mapStateToProps)(Messages);
