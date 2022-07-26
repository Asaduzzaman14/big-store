import React from 'react';
import bannerimg from "../Assates/sample-1 (1).jpg"


const Banner = () => {
    return (
        <div className='min-w-full'>
            <img className='mx-auto w-100' src={bannerimg} alt="" />
        </div>
    );
};

export default Banner;