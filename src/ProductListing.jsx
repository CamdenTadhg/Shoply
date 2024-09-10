import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import './ProductListing.css';

const ProductListing = ({product}) => {
    console.log('product listing rendering')
    return (
        <ListItem id={product.id}>
            <ListItemText sx={{width: '10vw'}}><img class='stock-list-image' src={product.image_url}/></ListItemText>
            <ListItemText sx={{margin: '10px'}}>{product.name}</ListItemText>
            <ListItemText sx={{textAlign:'right', marginRight: '10vw'}}>${product.price}</ListItemText>
            <AddItem product={product}/>
            <RemoveItem product={product}/>
        </ListItem>
    )
}

export default ProductListing;