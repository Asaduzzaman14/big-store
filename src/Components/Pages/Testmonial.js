import React from "react";

const Testmonial = () => {
  const testmonials = [
    {
      img: "https://i.ibb.co/hVzYZmQ/product-9.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
      name: "mark jofferson",
    },
    {
      img: "https://i.ibb.co/hVzYZmQ/product-9.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
      name: "mark jofferson",
    },
    {
      img: "https://i.ibb.co/hVzYZmQ/product-9.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
      name: "mark jofferson",
    },
  ];

  return (
    <>
      <div className='bg-base-100 mt-10 p-5 rounded-md overflow-hidden'>
        <h2 className='font-bold text-xl my-3'>Our Testimonials</h2>
        <hr />

        <div className='grid grid-cols-1  lg:grid-cols-3 gap-4'>
          {testmonials.map((test, index) => (
            <div
              data-aos='fade-up'
              data-aos-offset='100'
              data-aos-delay='100'
              data-aos-easing='ease-in-out'
              data-aos-duration='1000'
              key={index}
              className='text-center  '
            >
              <img
                className='w-20 h-20 mx-auto rounded-full m-5'
                src={test.img}
                alt=''
              />
              <p className='text-gray-500'>{test.desc}</p>
              <p className='text-gray-800 text-lg mt-1 font-semibold'>
                {test.name}
              </p>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Testmonial;
