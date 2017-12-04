import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import App from './App';

// const initialState = {
//     result: 1,
//     lastValues: []
// }

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

// const myLogger = (store) => (next) => (action) => {
//     console.log('Logged action: ', action);
//     next(action);
// };

const store = createStore(combineReducers(
    {mathReducer, userReducer}),
    {},
    applyMiddleware(logger)
);

// store.subscribe(() => {
//     console.log('Store updated: ', store.getState());
// });

// store.dispatch({type: 'ADD', payload: 10});
// store.dispatch({type: 'ADD', payload: 20});
// store.dispatch({type: 'SET_NAME', payload: 'Will'});
// store.dispatch({type: 'SET_AGE', payload: 30});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);