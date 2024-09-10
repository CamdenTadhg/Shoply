import {ADD, REMOVE, REMOVEALL} from './actionTypes';

export function add(data) {
    return {
        type: ADD,
        payload: data
    };
}

export function remove(data){
    return {
        type: REMOVE,
        payload: data
    }
}

export function removeAll(data){
    return {
        type: REMOVEALL,
        payload: data
    }
}