import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import GroupProducts from './GroupProducts';
import Products from './Products';
import Testmonial from './Testmonial';

const Home = () => {
    return (
        <div className=' bg-accent'>
            <Banner></Banner>
            <div className='px-10 w-[1200px] mx-auto'>
                <GroupProducts></GroupProducts>
                <Products></Products>
                <Testmonial></Testmonial>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;