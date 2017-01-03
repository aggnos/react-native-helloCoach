import { combineReducers } from 'redux';
import * as eventsReducer from './events';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
    eventsReducer,
    navigationReducer
));
