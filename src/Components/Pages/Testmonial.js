import React from 'react';

const Testmonial = () => {

    const testmonials = [

        {
            "img": "https://i.ibb.co/hVzYZmQ/product-9.jpg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
            "name": "mark jofferson"
        },
        {
            "img": "https://i.ibb.co/hVzYZmQ/product-9.jpg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
            "name": "mark jofferson"
        },
        {
            "img": "https://i.ibb.co/hVzYZmQ/product-9.jpg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem error dolor consequatur voluptatibus excepturi similique alias placeat ducimus, nostrum dolorum!",
            "name": "mark jofferson"
        },

    ]


    return (
        <>
            <div className='bg-base-100 mt-10 p-5 rounded-md'>
                <h2 className='font-bold text-xl my-3'>Our Testimonials</h2>
                <hr />

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>{testmonials.map(test => <div className='text-center  '>

                    <img className='w-20 h-20 mx-auto rounded-full m-5' src={test.img} alt="" />
                    <p className='text-gray-500'>{test.desc}</p>
                    <p className='text-gray-900 text-lg mt-2'>{test.name}</p>

                </div>)} </div>

            </div>


        </>
    );
};

export default Testmonial;