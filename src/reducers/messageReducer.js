const messageReducerDefaultState = {
    msg: '',
    msgs: []
};

export default (state = messageReducerDefaultState, action) => {
    switch(action.type) {
        case 'MESSAGE_RECIEVED':
            return {
                ...state,
                msgs: action.msgs,
                type: 'ReceiveMessage'
            };
        case 'MESSAGE_SENT':
            console.log(action.msg);
            return {
                ...state,
                msg: action.msg,
                type: 'SendMessage'
            };
        case 'REFRESH_MESSAGES':
            return {
                ...state,
                msgs: action.msgs,
            }
                
        default:
            return state;
    }
};