import React from 'react';
import Electric from './Electric';
import GroupProducts from './GroupProducts';

const Catagoris = () => {


    return (
        <div className=' gap-4 my-7 justify-center grid md:grid-cols-3 lg:grid-cols-3'>
            <GroupProducts></GroupProducts>
            <Electric></Electric>
            <Electric></Electric>

        </div>
    );
};

export default Catagoris;