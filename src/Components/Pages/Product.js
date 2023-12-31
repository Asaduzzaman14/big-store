import React from "react";
import { add } from "../../store/cardSlice";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Product = ({ product }) => {
  const { name, id, img, price } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className='group rounded-md border w-[180px] flex-row gap-2'>
      {/* <Link to='Product/id'> */}
      <div className='relative'>
        <figure className='w-[180px] h-[210px] rounded-sm'>
          <img className='w-full h-full' src={img} alt='Movie' />
        </figure>
        {/* icons */}

        <div className='hidden group-hover:block group-hover:delay-1000 duration-500 group-hover:transition group-hover:ease-linear'>
          <div className='flex flex-col absolute top-0 left-0'>
            <button className='transition-all group-hover:delay-1000 text-3xl hover:bg-primary hover:text-white p-1 rounded-sm'>
              <HiOutlineHeart />
            </button>

            <button
              className='relative -top-5 group-hover:top-0 group-hover:delay-1000 text-3xl hover:bg-primary hover:text-white p-1 rounded-sm'
              onClick={() => handleAddToCart(product)}
            >
              <BsCartCheckFill />
            </button>

            <button className='group-hover:delay-2000 text-3xl hover:bg-primary hover:text-white p-1 rounded-sm'>
              <BsCartCheckFill />
            </button>
          </div>
        </div>
      </div>

      <div className='px-3 py-2'>
        <p className='text-xs hover:text-secondary'>Gadget Zone</p>
        <p className='text-sm font-medium text-gray-800  hover:text-secondary '>
          {name}
        </p>
        <p className='text-primary text-md font-medium  '>${price}</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Product;
