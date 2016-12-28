import {NAV_POP, NAV_PUSH} from './actionTypes';

export function navigatePush(state) {
    state = typeof state === 'string' ? { key: state, title: state } : state

    return {
	type: NAV_PUSH,
	state
    };
}

export function navigatePop() {
    return {
	type: NAV_POP
    };
}
