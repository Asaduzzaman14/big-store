import React from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item, handelRemove }) => {
  const { _id, name, img, price, detail } = item;

  return (
    <>
      <div className='flex border rounded-sm p-3 items-center justify-between'>
        <img className='w-20 rounded-sm' src={img} alt='' />
        <h3>{name} </h3>
        <h3> ${price} </h3>

        <div className='flex  gap-2'>
          <div className='flex border border-black rounded-sm text-black group w-full h-full'>
            <button className='btn-xs bg-gray-400 '>-</button>
            <input
              className=' w-14 border-none outline-none'
              type={"Number"}
              // maxLength={1}
              // minLength={1}
              max={999}
              min={1}
            ></input>
            <button className='btn-xs bg-gray-400 h-fit'>+</button>
          </div>

          <span
            onClick={() => handelRemove(_id)}
            className='text-3xl text-red-500'
          >
            <MdDelete />
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
