import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';

import App from './App';

// const initialState = {
//     result: 1,
//     lastValues: []
// }

// const myLogger = (store) => (next) => (action) => {
//     console.log('Logged action: ', action);
//     next(action);
// };

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