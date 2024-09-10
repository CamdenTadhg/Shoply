import {add, remove, removeAll} from './actionCreators';
import {ADD, REMOVE, REMOVEALL} from './actionTypes';
import {test, expect} from 'vitest';

test('creates an add action', () => {
    expect(add('data')).toEqual({type: ADD, payload: 'data'});
});

test('creates a remove action', () => {
    expect(remove('data')).toEqual({type: REMOVE, payload: 'data'});
});

test('creates a removeAll action', () => {
    expect(removeAll('data')).toEqual({type: REMOVEALL, payload: 'data'});
})

