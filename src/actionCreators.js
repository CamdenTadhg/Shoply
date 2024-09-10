import {ADD, REMOVE, REMOVEALL, CHANGEQTY} from './actionTypes';

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

export function changeQty(data) {
    return {
        type: CHANGEQTY,
        payload: data
    }
}