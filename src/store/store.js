import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import mathReducer from '../reducers/math.reducer';
import userReducer from '../reducers/user.reducer';

const store = createStore(combineReducers(
    {mathReducer, userReducer}),
    {},
    applyMiddleware(logger)
);

export default store;