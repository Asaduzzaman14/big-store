import React from 'react';

const Product = ({ product }) => {
    const { name, id, img, price } = product
    return (
        <div class="w-44 bg-base-100 shadow-xl mb-4">
            <figure className='w-44'><img src={img} alt="Movie" /></figure>
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
    );
};

export default Product;