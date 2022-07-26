import React from 'react';
import Electric from './Electric';
import GroupProducts from './GroupProducts';

const Catagoris = () => {


    return (
        <div className='grid grid-cols-3 gap-4 my-7'>
            <GroupProducts></GroupProducts>
            <Electric></Electric>
            <Electric></Electric>

        </div>
    );
};

export default Catagoris;