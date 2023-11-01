import React from "react";
import { add } from "../../store/cardSlice";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";

const Product = ({ product }) => {
  const { name, id, img, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className='rounded-md border w-[180px] flex-row gap-2'>
      <Link to='Product/id'>
        <figure className='w-[180px] h-[210px] rounded-sm'>
          <img src={img} alt='Movie' />
        </figure>

        <div className='mt-8'>
          <p className='text-lg font-noraml text-gray-800 hover:text-secondary '>
            {name}
          </p>
          <p className='text-textColor font-medium  '>Lem ipsum dolor</p>

          <p className='text-textColor font-medium  '>${price}</p>
          {/* icons */}
          <div className='flex'>
            <button
              className='text-2xl hover:bg-primary hover:text-white p-1 rounded-sm'
              onClick={() => handleAddToCart(product)}
            >
              <BsCartCheckFill />
            </button>

            <span className='text-2xl hover:bg-primary hover:text-white p-1 rounded-sm'>
              <HiOutlineHeart />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
