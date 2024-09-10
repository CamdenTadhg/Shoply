import React from 'react';
import {useDispatch} from 'react-redux';
import {removeAll} from './actionCreators';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const RemoveAllItem = ({product}) => {
    const dispatch = useDispatch();

    const removeAllItem = () => {
        dispatch(removeAll(product.id));
    }
    return (
        <DeleteIcon color="error" sx={{cursor: 'pointer'}} onClick={removeAllItem}/>
    )
}

export default RemoveAllItem;