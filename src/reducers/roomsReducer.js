const roomReducerDefaultState = {
    'room': 'foods'
};

export default (state = roomReducerDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_ROOM':
            console.log('wwhowhowhowho');
            return {
                ...state,
                room: action.roomName,
                type: 'changeRoom'
            };
        
        default:
            return {
                ...state,
                type:'noChange'
            };
    }
};