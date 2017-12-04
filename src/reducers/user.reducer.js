const userReducer = (state = {name: 'Will', age: 27}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            // state.result += action.payload;
            return {
                ...state,
                name: action.payload
            };
        case 'SET_AGE':
            return {
                ...state,
                age: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;