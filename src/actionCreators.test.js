import {add, remove} from './actionCreators';
import {ADD, REMOVE} from './actionTypes';
import {test, expect} from 'vitest';

test('creates an add action', () => {
    expect(add('data')).toEqual({type: ADD, payload: 'data'});
});

test('creates a remove action', () => {
    expect(remove('data')).toEqual({type: REMOVE, payload: 'data'});
});

