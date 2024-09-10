import './data.json';
import {combineReducers} from 'redux';

const CART_INITIAL_STATE = []

function cartReducer(state=CART_INITIAL_STATE, action){
    switch (action.type){
        case 'ADD': 
            const incItem = state.find((item) => item.id === action.payload.id);
            if (incItem){
                incItem.qty += 1;
                let newState = state.filter((item) => item.id !== action.payload.id);
                newState.push(incItem);
                return newState
            } else {
                return [...state, action.payload]
            }
        case 'REMOVE': 
            const decItem = state.find((item) => item.id === action.payload);
            if (decItem.qty > 1){
                decItem.qty -= 1;
                let newState = state.filter((item) => item.id !== action.payload);
                newState.push(decItem);
                return newState;
            } else {
                let newState = state.filter((item) => item.id !== action.payload);
                return newState;
            }
        default: 
            return state;
    }
}

const STOCK_INITIAL_STATE = data.json;

function stockReducer(state=STOCK_INITIAL_STATE, action){
    switch (action.type){
        default: 
            return state;
    }
}

const rootReducer = combineReducers({stock: stockReducer, cart: cartReducer});

export default rootReducer;