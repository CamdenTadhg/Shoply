import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import {Link} from 'react-router-dom';
import './ProductListing.css';

const ProductListing = ({product}) => {
    return (
        <ListItem id={product.id}>
            <ListItemText sx={{width: '10vw'}}><img className='stock-list-image' src={product.image_url}/></ListItemText>
            <ListItemText sx={{margin: '10px'}}><Link to={`/products/${product.id}`}>{product.name}</Link></ListItemText>
            <ListItemText sx={{textAlign:'right', marginRight: '10vw'}}>${product.price}</ListItemText>
            <AddItem product={product}/>
            <RemoveItem product={product}/>
        </ListItem>
    )
}

export default ProductListing;