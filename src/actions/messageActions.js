export const messageRecieved = (msgs = '') => ({
    type: 'MESSAGE_RECIEVED',
    msgs
});

export const messageSent = (msg = '') => ({
    type: 'MESSAGE_SENT',
    msg
});