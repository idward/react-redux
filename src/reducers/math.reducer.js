const mathReducer = (state = {result: 1, lastValues: []}, action) => {
    switch (action.type) {
        case 'ADD':
            // state.result += action.payload;
            return {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
        case 'SUBTRACT':
            return state = state - action.payload;
        default:
            return state;
    }
}

export default mathReducer;