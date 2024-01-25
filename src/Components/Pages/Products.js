import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fetchProduct, STATUSES } from "../../store/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

const CustomPrevArrow = ({ onClick }) => (
  <button
    type='button'
    className='slick-prev -mb-7 -top-24 lg:-top-11 left-[calc(100%-80px)]  w-9 h-9 rounded-sm  bg-gray-400 hover:bg-black  focus:bg-black flex  place-items-center justify-center '
    onClick={onClick}
  >
    Previous
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    type='button'
    className='slick-next -top-24 lg:-top-11 right-0 rounded-sm  w-9 h-9 bg-gray-400 hover:bg-black text-black flex justify-center place-items-center focus:bg-black  '
    onClick={onClick}
  >
    Previous
  </button>
);

const Products = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("1");
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2> Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2 className='text-red-500 '> Something worng</h2>;
  }

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-base-100 p-5 rounded-lg'>
      <div>
        <h2> Single Item</h2>
      </div>

      <div className=''>
        <h2 className='font-semibold text-left text-lg'>Trending Products</h2>
        <hr className='my-3 text-red-600' />

        <ul className='justify-end  font-medium lg:mr-28  flex gap-3 mt-4 mb-8 text-gray-700'>
          <li
            onClick={() => setActive(1)}
            className={`cursor-pointer  ${active == 1 && "text-[#747171]"}`}
          >
            Fashion
          </li>
          <li
            onClick={() => setActive(2)}
            className={`cursor-pointer  ${active == 2 && "text-[#747171]"}`}
          >
            Cosmatic
          </li>
          <li
            onClick={() => setActive(3)}
            className={`cursor-pointer  ${active == 3 && "text-[#747171]"}`}
          >
            Electronic
          </li>
        </ul>
      </div>
      {/* <div className=' grid md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto'> */}
      <Slider {...settings}>
        {data.map((product) => (
          <Product product={product}> </Product>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
