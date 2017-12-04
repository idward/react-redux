import {combineReducers, createStore} from 'redux';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload};
        case 'CHANGE_AGE':
            return {...state, age: action.payload};
        default:
            return state;
    }
    return state;
};

const tweetReducer = (state = [], action) => {
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweet: tweetReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch({type: 'CHANGE_NAME', payload: 'Will'});
store.dispatch({type: 'CHANGE_AGE', payload: 35});
