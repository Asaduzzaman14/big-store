import React from "react";

import image from "../../Assates/b-blog-7.jpg";

const LatestBlog = () => {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, inventore labore. Atque beatae illum architecto, magnam voluptates doloremque quo magni tenetur, ipsum dolore eveniet vitae incidunt asperiores sed debitis necessitatibus pariatur nostrum vero optio, expedita assumenda. Repudiandae libero doloremque repellat officia reprehenderit. Velit cupiditate excepturi expedita quae laboriosam atque eveniet molestias ea dicta? Voluptas deleniti corrupti cupiditate quae facere nulla nihil, nostrum at quidem ullam molestiae illo ea aliquam mollitia optio, alias ut quos dolor quis minima, excepturi magni nobis! Nobis corrupti cum fuga qui saepe amet quasi dignissimos tenetur unde harum. Rerum atque aspernatur reiciendis doloribus, amet tenetur inventore.";
  return (
    <div className=' bg-white p-3 px-4 mt-5 rounded-md'>
      <h2 className='font-semibold text-xl my-3'>Our Latest Blog</h2>
      <hr />
      <div className='flex justify-between flex-wrap gap-5 py-5'>
        <div className='w-72'>
          <img className='w-72 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-72'>
          <img className='w-72 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-72'>
          <img className='w-72 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary pt-3 mt-5'>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
        <div className='w-72'>
          <img className='w-72 h-80 mb-4 rounded-md' src={image} alt='img' />
          <span className='text-secondary  '>10 december 2024</span>
          <p>{text.slice(0, 60)}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
