import React from 'react';
import ProductListing from './ProductListing';
import {useSelector} from 'react-redux';
import List from '@mui/material/List';

const ProductList = () => {
    const stock = useSelector(store => store.stock);

    return (
        <List>
            {stock.map((item) => {
                return <ProductListing key={item.id} product={item}/>
            })}
        </List>
    )
}

export default ProductList;