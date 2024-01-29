import React from "react";

import image from "../../Assates/b-blog-7.jpg";
import Slider from "react-slick";

const CustomPrevArrow = ({ onClick }) => (
  <button
    type='button'
    className='slick-prev -mb-7 -top-7 lg:-top-11 left-[calc(100%-80px)]  w-9 h-9 rounded-sm  bg-gray-400 hover:bg-black  focus:bg-black opacity-100 flex  place-items-center justify-center '
    onClick={onClick}
  >
    Previous
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    type='button'
    className='slick-next -top-7 lg:-top-11 right-0 rounded-sm  w-9 h-9 bg-gray-400 hover:bg-black text-black flex  opacity-100 justify-center place-items-center focus:bg-black  '
    onClick={onClick}
  >
    Previous
  </button>
);

const LatestBlog = () => {
  const settings = {
    className: "border-0",
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

  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, inventore labore. Atque beatae illum architecto, magnam voluptates doloremque quo magni tenetur, ipsum dolore eveniet vitae incidunt asperiores sed debitis necessitatibus pariatur nostrum vero optio, expedita assumenda. Repudiandae libero doloremque repellat officia reprehenderit. Velit cupiditate excepturi expedita quae laboriosam atque eveniet molestias ea dicta? Voluptas deleniti corrupti cupiditate quae facere nulla nihil, nostrum at quidem ullam molestiae illo ea aliquam mollitia optio, alias ut quos dolor quis minima, excepturi magni nobis! Nobis corrupti cum fuga qui saepe amet quasi dignissimos tenetur unde harum. Rerum atque aspernatur reiciendis doloribus, amet tenetur inventore.";
  return (
    <div className=' bg-white p-3 px-4 mt-5 rounded-md'>
      <h2 className='font-semibold text-xl my-3'>Our Latest Blog</h2>
      <hr />

      <Slider {...settings}>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-64'>
          <img className='w-64 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary  '>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
      </Slider>
    </div>
  );
};

export default LatestBlog;
