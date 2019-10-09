export const changeRoom = ( roomName = 'foods') => ({ 
    type: 'CHANGE_ROOM',
    roomToChange: roomName
});