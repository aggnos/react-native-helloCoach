import {INCREMENT, ADD_EVENT } from './actionTypes';

export function addEvent(category){
    return {
	type: ADD_EVENT,
	category: category
    };
};

export function increment(){
    return {
	type: INCREMENT
    };
};
