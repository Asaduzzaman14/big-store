import React from 'react';

const CartItem = ({ item }) => {

    const { id, name, img, price, detail } = item;



    return (
        <div>
            <img className='w-28' src={img} alt="" />
            {name}
        </div>
    );
};

export default CartItem;