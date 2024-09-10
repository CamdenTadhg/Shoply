import {add, remove, removeAll, changeQty} from './actionCreators';
import {ADD, REMOVE, REMOVEALL, CHANGEQTY} from './actionTypes';
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

test('creates a change qty action', () => {
    expect(changeQty('data')).toEqual({type: CHANGEQTY, payload: 'data'});
})
