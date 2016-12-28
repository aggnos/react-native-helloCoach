import { NAV_PUSH, NAV_POP } from '../actions/navigationActions';

const initialNavState = {
    index: 0,
    routes: [
	{ key: 'EventsContainer', title: 'EventsContainer' }
    ]
}

import * as NavigationStateUtils from 'NavigationStateUtils'

export function navigationState(state = initialNavState, action) {
    switch (action.type) {
    case 'NAV_PUSH':
	if (state.routes[state.index].key === (action.state && action.state.key)) return state 
	return NavigationStateUtils.push(state, action.state)

    case 'NAV_POP':
	if (state.index === 0 || state.routes.length === 1) return state
	return NavigationStateUtils.pop(state);
    default: return state

    }
}
