import React from 'react'; 
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';

const MiniCart = () => {
    console.log('minicart rendering');
    const cart = useSelector(store => store.cart);

    let total = 0;
    for (let item of cart){
        total = total + item.total;
    }

    return (
        <div>
            <Box component="section" sx={{border: '1px dashed gray'}}>
                <ul>
                    {cart.map((item) => {
                        return <li key={item.id}>{item.qty} {item.name}: ${item.total}</li>
                    })}
                </ul>
                <div>Cart Total: ${total}</div>
            </Box>
        </div>

    )
}

export default MiniCart;