import React from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Assates/Testimonials-img/person 1.png";
import "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className=' sticky top-0 h-12 z-40 bg-gray-900 flex justify-between justify-items-center p-2 lg:p-2 lg:px-5 text-white'>
        <Link to={"/dashboard"}>
          <span className='flex justify-items-center normal-case text-xl text-secondary'>
            BIG<span className='text-white'>Shop</span>
          </span>
        </Link>
        <img className='w-8' src={user} alt='' />
      </div>

      <div className='flex flex-row justify-between'>
        <div className=' fixed  top-15 left-0  drawer-side h-[80%]'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='overflow-y-scroll bg-primary/95 text-white font-semibold menu  w-40 h-screen'>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='addproduct'>Add Product</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allOrders'>Orders</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allUsers'>Users</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allreviews'>Reviews</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>Products</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link to='allproducts'>11111</Link>
            </li>
            <li>
              <Link to='/' className='mb-14 mx-auto'>
                <button className=' border px-4 mx-auto m-2 rounded-md w-fit'>
                  Home
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='  ml-40 justify-end bg-gray-300  border-2 border-red-200'>
          <div className='mx-auto'>
            <Outlet />
          </div>

          <div className='min-w-full mt-10'>
            <div className='p-3 bg-gray-500 min-w-full'>
              <h2 className='text-xl min-w-full'>
                Footer Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maxime, adipisci! consectetur
                adipisicing elit. Maxime, adipisci!
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
    </>
  );
};

export default Dashboard;
