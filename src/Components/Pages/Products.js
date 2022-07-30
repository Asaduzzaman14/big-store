import React, { useEffect, useState } from 'react';
import Product from './Product';
import { fetchProduct, STATUSES } from '../../store/ProductsSlice';
import { useDispatch, useSelector } from 'react-redux';


const Products = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProduct())

    }, [])

    if (status === STATUSES.LOADING) {
        return <h2> Loading...</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2 className='text-red-500 '> Something worng</h2>
    }



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
                    data.map(product => <Product
                        product={product}
                    > </Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;