import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { remove } from "../../store/cardSlice"

const Cart = () => {
    const items = useSelector((state) => state.product)
    const dispatch = useDispatch()

    const handelRemove = (id) => {
        // console.log(id);
        dispatch(remove(id))

    }




    return (
        <div className='bg-gray-200'>


            <div className='w-50 p-10 rounded-lg gap-10 flex justify-between'>
                <div className='bg-gray-50 p-5'>
                    <h2 className='text-xl font-semibold text-gray-700 py-2'>Shoping Cart</h2>
                    {
                        items.map(item => <CartItem
                            item={item}
                            key={item.id}
                            handelRemove={handelRemove}
                        ></CartItem>)
                    }
                </div>

                <div className='bg-gray-50 p-5 text-xl  w-[450px]'>
                    <h3>Item: {items.length}</h3>
                    <h3>Shoping: </h3>
                    <h3>text: </h3>
                    <hr className='mb-0' />
                    <h3>Total: </h3>
                    <div className='bg-gray-200 p-3 my-5'>
                        <input className='border p-2 mr-2 my-3' type="text" placeholder='promo code' />
                        <button className='bg-primary p-2 text-white rounded-sm'>Add</button>
                    </div>

                    <button className='bg-primary text-white p-2 rounded-sm mt-4'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;