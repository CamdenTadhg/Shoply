import React from 'react'; 
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import RemoveAllItem from './RemoveAllItem';
import ChangeQty from './ChangeQty';
import './MiniCart.css';

const MiniCart = () => {
    console.log('minicart re-rendering');
    const cart = useSelector(store => store.cart);

    let total = 0;
    for (let item of cart){
        total = total + item.total;
    }

    return (
        <div>
            <Box component="section" sx={{border: '1px dashed gray'}}>
                <h3>Your Cart</h3>
                <List>
                    {cart.map((item) => {
                        return <ListItem key={item.id}>
                            <ListItemText>
                                <ChangeQty product={item} quantity={item.qty} />
                                {item.name}:
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

export default MiniCart;