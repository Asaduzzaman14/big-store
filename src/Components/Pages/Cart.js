import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const items = useSelector((state) => state.product)


    return (
        <div>
            <h2>This is Cart page</h2>


            {
                items.map(item => <CartItem
                    item={item}
                    key={item.id}
                ></CartItem>)
            }
        </div>
    );
};

export default Cart;