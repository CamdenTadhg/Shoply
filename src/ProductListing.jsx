import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';

const ProductListing = ({product}) => {
    console.log('product listing rendering')
    return (
        <ListItem id={product.id}>
            <ListItemText>{product.name}</ListItemText>
            <ListItemText>${product.price}</ListItemText>
            <AddItem/>
            <RemoveItem/>
        </ListItem>
    )
}

export default ProductListing;