import React from 'react';

const GropueProduct = ({ product }) => {
    const { name, price, productimg } = product
    return (
        // this is card
        <div>
            <div className='p-2'>
                <img className='w-48' src={productimg} alt="" />
                <p>{name}</p>
                <p>{price}</p>
            </div>

        </div>
    );
};

export default GropueProduct;