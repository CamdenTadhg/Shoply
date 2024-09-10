import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {changeQty} from './actionCreators';
import './ChangeQty.css';


const ChangeQty = ({product, quantity}) => {
    console.log('changeQty re-rendering');
    console.log('product is ', product);
    console.log('quantity is ', quantity);
    let qty = quantity;
    const dispatch = useDispatch();

    const handleChange = (event) => {
        let newProduct = {...product, qty: Number(event.target.value)};
        dispatch(changeQty(newProduct));
    };

    return(
        <input className='qty-input' type='number' min="1" value={qty} onChange={handleChange}/>
    );
};

export default ChangeQty;