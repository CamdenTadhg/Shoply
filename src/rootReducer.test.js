import { describe, test, expect } from 'vitest';
import {cartReducer, stockReducer} from './rootReducer';

describe('cartReducer function', () => {
    const cart= [{
        id: "47314fa1-ae56-4eae-80be-af6691145951",
        name: 'tv',
        price: 219.99,
        qty: 1,
        total: 219.99
    }];

    const cart2 = [{
        id: "47314fa1-ae56-4eae-80be-af6691145951",
        name: 'tv',
        price: 219.99,
        qty: 2,
        total: 439.98
    }]

    test('without an action, it should return the cart', () => {
        expect(cartReducer(cart, {type: undefined})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 1,
            total: 219.99
        }]);
    });

    test('it should add a single item to the cart', () => {
        expect(cartReducer(cart, {type: 'ADD', payload: {
            id: "b04b779c-1cfb-48a7-8424-25a8c7e608ae",
            name: 'toaster oven', 
            price: 20.99
        }})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 1,
            total: 219.99
        },
        {
            id: "b04b779c-1cfb-48a7-8424-25a8c7e608ae",
            name: 'toaster oven', 
            price: 20.99,
            qty: 1,
            total: 20.99
        }]);
    });

    test('it should increment an existing item in the cart', () => {
        expect(cartReducer(cart, {type: 'ADD', payload: {
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99
        }})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 2,
            total: 439.98
        }]);
    });

    test('it should remove a single item from the cart', () => {
        expect(cartReducer(cart, {type: 'REMOVE', payload: "47314fa1-ae56-4eae-80be-af6691145951"})).toEqual([]);
    });

    test('it should decrement an existing item in the cart', () => {
        expect(cartReducer(cart2, {type: 'REMOVE', payload: "47314fa1-ae56-4eae-80be-af6691145951"})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 1,
            total: 219.99
        }])
    });

    test('it should remove all of an item from the cart', () => {
        expect(cartReducer(cart2, {type: "REMOVEALL", payload: "47314fa1-ae56-4eae-80be-af6691145951"})).toEqual([]);
    });

    test('it should change the quantity of an item in the cart', () => {
        expect(cartReducer(cart2, {type: "CHANGEQTY", payload: {        
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 5,
            total: 1099.95
        }})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 5,
            total: 1099.95
        }]);
    });

    test('if trying to remove item not in cart, should return cart', () => {
        expect(cartReducer(cart, {type: 'REMOVE', payload: 'dudd'})).toEqual([{
            id: "47314fa1-ae56-4eae-80be-af6691145951",
            name: 'tv',
            price: 219.99,
            qty: 1,
            total: 219.99
        }])
    });
});

describe('stockReducer function', () => {
    const stock = [{
        id: 'test id', 
        name: 'testing item', 
        price: 100.00,
    },{
        id: 'second test id',
        name: "second testing item",
        price: 150.00
    }]
    test('should return the stock', () => {
        expect(stockReducer(stock, {type: undefined})).toEqual([{
            id: 'test id', 
            name: 'testing item', 
            price: 100.00,
        },{
            id: 'second test id',
            name: "second testing item",
            price: 150.00
        }])
    });
});