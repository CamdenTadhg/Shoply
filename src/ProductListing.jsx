import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ProductListing = ({product}) => {
    return (
        <ListItem>
            <ListItemText>{product.name}</ListItemText>
            <ListItemText>{product.price}</ListItemText>
        </ListItem>
    )
}

export default ProductListing;