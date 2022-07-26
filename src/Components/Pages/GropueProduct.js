import React from 'react';

const GropueProduct = ({ product }) => {
    const { name, price, productimg } = product
    return (
        <div>
            <div className='p-2'>
                <img className='w-40' src={productimg} alt="" />
                <p>{name}</p>
                <p>{price}</p>
            </div>

        </div>
    );
};

export default GropueProduct;