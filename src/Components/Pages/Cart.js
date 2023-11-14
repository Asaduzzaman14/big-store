import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { remove } from "../../store/cardSlice";

const Cart = () => {
  const items = useSelector((state) => state.product);
  console.log(items);
  const dispatch = useDispatch();

  const handelRemove = (id) => {
    dispatch(remove(id));
  };
  let price = 0;

  for (const item of items) {
    console.log(item.price);
    price += parseInt(item.price);
  }

  console.log(price);

  return (
    <div className='bg-gray-200'>
      <div className='w-50 p-3 lg:p-10  rounded-lg gap-10 flex flex-col lg:flex-row justify-between'>
        <div className='bg-gray-50 p-5 w-full rounded-md'>
          <h2 className='text-xl  font-semibold  text-gray-700 py-2'>
            Shoping Cart
          </h2>
          <div className='flex flex-col gap-1'>
            {items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handelRemove={handelRemove}
              ></CartItem>
            ))}
          </div>
        </div>

        <div className='bg-gray-50 p-3 rounded-md text-xl  lg:w-[450px]'>
          <div className='font-medium'>
            <h3>Item: {items.length}</h3>
            <h3>Shoping: ${price} </h3>
            <h3>tax: $20</h3>

            <div className=' border-b-[1px] border-black'></div>
            <h3>Total: {price}</h3>
          </div>

          <div className='bg-gray-300 rounded-md input-group w-fit p-3 my-5'>
            <input className='w-fit p-2' type='text' placeholder='promo code' />
            <button className='bg-primary p-2 px-3 text-white rounded-sm'>
              Add
            </button>
          </div>

          <button className='bg-primary text-white p-2 rounded-sm mt-4'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
