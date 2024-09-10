import React from 'react';
import {useDispatch} from 'react-redux';
import {remove} from './actionCreators';
import Button from '@mui/material/Button';

const RemoveItem = ({product}) => {
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(remove(product.id));
    }
    return (
        <Button variant="contained" color="error" onClick={removeItem}>Remove From Cart</Button>
    )
}

export default RemoveItem;