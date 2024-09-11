import React from 'react';
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RemoveAllItem from './RemoveAllItem';
import ChangeQty from './ChangeQty';

const Cart = () => {
    const cart = useSelector(store => store.cart);

    let total = 0;
    for (let item of cart){
        total = total + item.total;
        total.toFixed(2);
    }

    return (
        <div>
        <Box component="section" sx={{border: '1px dashed gray'}}>
            <h3>Your Cart</h3>
            <List>
                {cart.map((item) => {
                    return <ListItem key={item.id}>
                        <ListItemText sx={{maxWidth: '10vw'}}><img className='stock-list-image' src={item.image_url}/></ListItemText>
                        <ListItemText sx={{textAlign: 'left'}}>
                            <ChangeQty product={item} quantity={item.qty} />
                            {item.name} (price: ${item.price})
                        </ListItemText> 
                        <ListItemText sx={{textAlign: 'right'}}>${item.total}</ListItemText>
                        <RemoveAllItem product={item}/>
                    </ListItem>
                })}
            </List>
            <div id='minicart-total'>Cart Total: ${total}</div>
        </Box>
    </div>
    )
}

export default Cart;