import React from 'react';
import { add } from '../../store/cardSlice';
import { useDispatch } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, id, img, price } = product
    const dispatch = useDispatch()



    const handleAdd = (product) => {
        dispatch(add(product))


    }


    return (
        <div class="rounded-md mb-7 w-52">
            <figure className='w-full'><img src={img} alt="Movie" /></figure>
            <div className='  gap-4 m-1'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-semibold'>${price}</h3>
                    <button onClick={() => handleAdd(product)} className='btn-small bg-gray-400 h-7 px-5 text-white hover:bg-gray-500'>Add To cart </button>
                    {/* <Link to="/Product/id" className='btn-small bg-gray-400 h-7 px-5 text-white hover:bg-gray-500'>Add to cart </Link> */}
                </div>

            </div>
        </div>
    );
};

export default Product;