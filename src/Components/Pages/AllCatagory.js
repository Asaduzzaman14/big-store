import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/allProductSlice';
import { STATUSES } from '../../store/ProductsSlice';
import Footer from '../Shared/Footer';
import Product from './Product';

const AllCatagory = () => {

    const [filterdata, setFilterdata] = useState('')
    const [dataa, setDataa] = useState([])

    console.log(filterdata);

    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => (state.products))




    useEffect(() => {
        dispatch(fetchProduct(filterdata))

    }, [])

    if (status === STATUSES.LOADING) {
        return <h2> Loading...</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2 className='text-red-500 '> Something worng</h2>
    }


    return (

        <>
            <div className='bg-base-200'>

                <h2 className='my-3 max-w-[1024px]'>All Catatgory product</h2>

                <div className='p-10 grid grid-cols-12 gap-4 max-w-[1024px] mx-auto'>

                    <div className='col-span-3'>
                        <div className='bg-base-100 w-52 p-3 text-xs rounded '>
                            <h3 className='font-semibold mb-2 text-gray-700 '>Filter</h3>
                            <hr className='mt-1 mb-2 bg-black' />

                            <p onClick={() => setFilterdata("cosmatis")} className='pb-1 font-serif hover:underline hover:text-secondary cursor-pointer'>Cosmatis</p>
                            <p onClick={() => setFilterdata("fashion")} className='pb-1 font-serif hover:underline hover:text-secondary cursor-pointer'>Fashion</p>
                            <p onClick={() => setFilterdata("electronics")} className='pb-1 font-serif hover:underline hover:text-secondary cursor-pointer'>Electronics</p>
                            <p onClick={() => setFilterdata("jewellery")} className='pb-1 font-serif hover:underline hover:text-secondary cursor-pointer'>Jewellery</p>
                        </div>
                    </div>


                    <div className='col-span-9 '>
                        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center bg-base-100 p-5 rounded'>{

                            data.map(product => {
                                return <Product
                                    product={product}
                                    key={product._id}
                                ></Product>
                            })


                        }
                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>

        </>
    );
};

export default AllCatagory;