import {ADD_EVENT} from './actionTypes';

const defState = {

}

export function addEvent(category){
    return {
	type: ADD_EVENT,
	category
    };
};
