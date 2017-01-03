import * as types from '../actions/actionTypes';

const initialEventsState = {
    event: 0
};

export function eventsState(state = initialEventsState , action) {
    switch(action.type) {
    case 'INCREMENT':
	console.log("This is state.event: =>")
	console.log(state.event)
	return {...state, event: state.event + 1};
    default:
	return state;
    }
}
