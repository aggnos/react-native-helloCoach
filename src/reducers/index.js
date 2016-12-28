import { combineReducers } from 'redux';
import * as eventsReducer from './events';
import * as navigationReducer from './navigation';
import {CreateModelReducer} from 'redux-form';

export default combineReducers(Object.assign(
    eventsReducer,
    navigationReducer
));
