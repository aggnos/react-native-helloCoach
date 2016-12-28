import {CHOOSE_EVENT_TYPE} from './actionTypes';

export function chooseEventType(eventType){
    return {
	type: CHOOSE_EVENT_TYPE,
	eventType
    };
};
