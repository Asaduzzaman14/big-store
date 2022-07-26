import React from 'react';
import GropueProduct from './GropueProduct';

const GroupProducts = () => {

    const products = [
        {
            "id": "1",
            "productimg": "https://i.ibb.co/cD3tzh0/laptop.jpg ",
            "name": "Mobile"
        },
        {
            "id": "2",
            "productimg": "https://i.ibb.co/55VRH2G/led-monitor.jpg",
            "name": "Mobile"
        },
        {
            "id": "3",
            "productimg": "https://i.ibb.co/M5pBMWc/speaker.jpg ",
            "name": "Walton TV"
        },
        {
            "id": "4",
            "productimg": "https://i.ibb.co/M5pBMWc/speaker.jpg ",
            "name": "Walton TV"
        },
    ]

    return (
        <div className='bg-base-100 p-5 rounded-lg'>
            <h2 className='text-xl my-2'>Men & Women's Fashion</h2>
            <div className='grid grid-cols-2  w-[300px]'> {
                products.map(product => <GropueProduct
                    product={product}
                    key={product.id}
                ></GropueProduct>)
            }
            </div>
        </div>
    );
};

export default GroupProducts;