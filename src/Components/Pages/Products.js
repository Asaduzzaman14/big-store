import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch("product.json")
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])

    return (
        <div className='bg-base-100 p-5 rounded-lg'>
            <div className=''>
                <h2 className='font-semibold text-left text-lg'>Trending Products</h2>
                <hr className='my-3 text-red-600' />

                <ul className='justify-end  font-semibold  flex gap-3 my-3 mb-3 text-gray-700'>
                    <li>Fashion</li>
                    <li>Cosmatic</li>
                    <li>Electronic</li>
                </ul>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto'>
                {
                    products.map(product => <Product
                        product={product}
                    > </Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;