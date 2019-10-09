const roomReducerDefaultState = {
    'room': 'foods'
};

export default (state = roomReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};