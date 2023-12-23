import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const items = useSelector((state) => state.product);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItem = (
    <>
      <li
        data-aos='fade-up'
        data-aos-delay='50'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <Link className='rounded-lg text-lg hover:text-secondary' to='/'>
          Home
        </Link>
      </li>
      <li
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <Link className='rounded-lg text-lg hover:text-secondary' to='/about'>
          About
        </Link>
      </li>
      <li
        data-aos='fade-up'
        data-aos-delay='150'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <Link className='rounded-lg text-lg hover:text-secondary' to='/blog'>
          Blogs
        </Link>
      </li>
      <li
        data-aos='fade-up'
        data-aos-delay='200'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <Link className='rounded-lg text-lg hover:text-secondary' to='/cart'>
          Cart: {items.length}
        </Link>
      </li>
      <>
        {user ? (
          <li
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-offset='10'
            data-aos-duration='1000'
          >
            <li onClick={logout} className=' text-xl hover:text-secondary'>
              Sign out
            </li>
          </li>
        ) : (
          <li
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-offset='10'
            data-aos-duration='1000'
          >
            <Link className='text-xl hover:text-secondary' to='login '>
              Login
            </Link>
          </li>
        )}
      </>
      <li
        data-aos='fade-left'
        data-aos-delay='200'
        data-aos-offset='10'
        data-aos-duration='1000'
      >
        <Link to='/dashboard' className='hover:text-secondary text-xl'>
          Dashboard
        </Link>
      </li>{" "}
    </>
  );

  return (
    <>
      <div className='navbar bg-primary text-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>

            {/* mobile menu  */}
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-0 z-[1] p-0 pl-0 shadow bg-primary rounded-lg w-52'
            >
              {menuItem}
            </ul>
          </div>
          <span className='btn btn-ghost normal-case text-xl text-secondary'>
            BIG<span className='text-white'>Shop</span>
          </span>{" "}
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{menuItem}</ul>
        </div>
      </div>

      {/* <div className='navbar z-10 bg-primary shadow-xl overflow-hidden'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex='1'
              className='menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-primary text-white rounded-lg w-52'
            >
              {menuItem}
            </ul>
          </div>
          <span className='btn btn-ghost normal-case text-xl text-secondary'>
            BIG<span className='text-white'>Shop</span>
          </span>
        </div>

        <div className='navbar-center lg:navbar-end lg:hidden'>
          <ul className='menu menu-horizontal p-0 text-white'>{menuItem}</ul>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
