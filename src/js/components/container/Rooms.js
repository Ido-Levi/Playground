import React from 'react';
import Room from '../presentational/Room.js';

export default class Rooms extends React.Component {

    constructor() {
        super();
        this.rooms = [{usersOn:1, roomName: 'this is a room'}];
    };

    render() {
        return(
            <div className='rooms-styles'>
                {this.rooms.length === 0 && <p>This server is missing rooms!! WERE GOING TO DIEEE!!</p>}
                <div>
                {
                    this.rooms.map((usersOn, roomName) => (
                        <Room   usersOn={usersOn}
                                roomName={roomName}/>
                    ))
                }
                </div>
            </div>
        );

    }
}