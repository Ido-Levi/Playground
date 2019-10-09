import React from 'react';
import {bindActionCreators} from 'redux';
// import {BrowserRouter, } from 'react-router-dom'
import { connect } from 'react-redux';

import Room from '../presentational/Room.js';
import {changeRoom} from '../../../actions/roomActions.js'

const rooms =  [{usersOn:1, roomName: 'foods'},
                {usersOn:1, roomName: 'drinks'},
                {usersOn: 3, roomName: 'tech'}];

let selectedRoom = 'foods';

const Rooms = (props) => {
    return(
        <div className='rooms-styles'>
        {rooms.length === 0 && <p>This server is missing rooms!! WERE GOING TO DIEEE!!</p>}
              <div>
                  {rooms.length > 0 && rooms.map((roomBtn)=><button onClick={()=>{props.dispatch(changeRoomDispatch(roomBtn.roomName))}}>{roomBtn.roomName}</button>)}
             </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      room: selectedRoom
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {changeRoomDispatch : bindActionCreators({changeRoom}, dispatch)};
  };
export default connect(mapStateToProps ,mapDispatchToProps)(Rooms);





// export default class Rooms extends React.Component {

//     constructor() {
//         super();
//         this.rooms = [{usersOn:1, roomName: 'foods'},
//                      {usersOn:1, roomName: 'drinks'},
//                      {usersOn: 3, roomName: 'tech'}];
//     };

//     render() {
//         return(
//             <div className='rooms-styles'>
//                 {this.rooms.length === 0 && <p>This server is missing rooms!! WERE GOING TO DIEEE!!</p>}
//                 <div>
//                     {this.rooms.length > 0 && this.rooms.map((room)=><button onClick={(e)=>{this.props.dispatch()}}>{room.roomName}</button>)}
//                 </div>
//             </div>
//         );

//     }
// }

