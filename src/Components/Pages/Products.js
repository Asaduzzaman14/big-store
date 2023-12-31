import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fetchProduct, STATUSES } from "../../store/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

const Products = () => {
  const dispatch = useDispatch();
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
    className: "slider",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

        <ul className='justify-end  font-semibold  flex gap-3 my-3 mb-3 text-gray-700'>
          <li>Fashion</li>
          <li>Cosmatic</li>
          <li>Electronic</li>
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
