import {ADD_EVENT} from '../actions/actionTypes';

export default function eventsReducer(state = {}, action) {
    switch(action.type) {
    case 'ADD_EVENT':
	console.log(action.category)
	
	return [...state, {category: action.category}];
    
    default:
	return state;
    }
}
