import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {



    const menuItem = <>
        <li><Link className='rounded-lg text-lg' to='/'>Home</Link></li>
        <li><Link className='rounded-lg text-lg' to='/about'>About</Link></li>
        <li><Link className='rounded-lg text-lg' to='/blog'>Blogs</Link></li>



        <li>
            {/* <a to='/dashborad' className='btn btn-ghost text-xl'>Dashborad</a> */}
        </li>





    </>
    return (
        <div className="navbar  z-10 bg-primary shadow-xl">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-primary text-white rounded-lg w-52">
                        {menuItem}
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl text-secondary">BIG<span className='text-white'>Shop</span></span>
            </div>

            <div className="navbar-center lg:navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItem}
                </ul>
            </div>

            {/* <div className="lg:navbar-center lg:hidden navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}

        </div>
    );
};

export default Navbar;