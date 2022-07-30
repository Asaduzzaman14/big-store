import React from 'react';
import { useSelector } from 'react-redux';

const BuyProduct = () => {

    const items = useSelector((state) => state.product)



    return (
        <div>
            <h2 className='text-2xl'>By Your Product</h2>
        </div>
    );
};

export default BuyProduct;