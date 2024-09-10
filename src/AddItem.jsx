import React from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import {add} from './actionCreators';

const AddItem = ({product}) => {
    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(add(product));
    }

    return (
        <Button variant="contained" color="secondary" sx={{margin: '0px 10px'}} onClick={addItem}>Add To Cart</Button>
    )
}

export default AddItem;