import React from 'react'; 
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';

const MiniCart = () => {
    console.log('minicart rendering');
    const cart = useSelector(store => store.cart);
    console.log(cart);

    return (
        <div>
            <Box component="section" sx={{border: '1px dashed gray'}}>
                <ul>
                    {cart.map((item) => {
                        item.total = item.price * item.qty;
                        return <li key={item.id}>{item.qty} {item.name}: {item.total}</li>
                    })}
                </ul>
            </Box>
        </div>

    )
}

export default MiniCart;