import {CHOOSE_EVENT_TYPE} from '../actions/actionTypes';

export const eventsReducer = (state = {}, action) => {
    switch(action.type) {
    case 'CHOOSE_EVENT_TYPE':
	return state;
    
    default:
	return state;
    }
}
