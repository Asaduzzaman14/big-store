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
        <Link to='/dashboard' className='btn btn-ghost text-xl'>
          dashboard
        </Link>
      </li>{" "}
    </>
  );

  return (
    <div className='navbar  z-10 bg-primary shadow-xl overflow-hidden'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden text-white'>
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
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-primary text-white rounded-lg w-52'
          >
            {menuItem}
          </ul>
        </div>
        <span className='btn btn-ghost normal-case text-xl text-secondary'>
          BIG<span className='text-white'>Shop</span>
        </span>
      </div>

      <div className='navbar-center lg:navbar-end  hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 text-white'>{menuItem}</ul>
      </div>

      <div className='lg:navbar-center lg:hidden navbar-end'>
        <label
          tabIndex='1'
          htmlFor='dashboard-sidebar'
          className='btn btn-ghost lg:hidden text-white'
        >
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
        </label>
      </div>
    </div>
  );
};

export default Navbar;
