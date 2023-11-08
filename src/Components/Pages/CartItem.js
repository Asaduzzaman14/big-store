import React from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item, handelRemove }) => {
  const { _id, name, img, price, detail } = item;

  return (
    <>
      <div className='flex  border p-3 items-center justify-between'>
        <img className='w-20' src={img} alt='' />
        <h3>{name} </h3>
        <h3> ${price} </h3>

        <div className='flex gap-2'>
          <button className='btn-xs bg-gray-400'>-</button>
          <input className='border p-2 w-14 h-7 -mx-2 ' type={"Number"}></input>
          <button className='btn-xs bg-gray-400'>+</button>

          <span
            onClick={() => handelRemove(_id)}
            className='text-3xl text-red-500'
          >
            {" "}
            <MdDelete />{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
