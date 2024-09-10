import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';
import './ProductDetail.css';

const ProductDetail = () => {
    const {id}= useParams();
    const stock = useSelector(store => store.stock);
    const item = stock.find((item) => item.id === id);

    return (
        <div>
            <img id='item-image' src={item.image_url}/>
            <div id='name'>{item.name}</div>
            <div id='price'>${item.price}</div>
            <div id='description'>{item.description}</div>
            <AddItem product={item}/>
            <RemoveItem product={item} />
        </div>

    )
}

export default ProductDetail;