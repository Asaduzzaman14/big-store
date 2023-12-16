import React from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Assates/Testimonials-img/person 1.png";
import "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className=' sticky top-0 z-40 bg-gray-900 flex justify-between p-2 lg:p-2 lg:px-5 text-white'>
        <span className='py-auto my-auto'>Back</span>

        <img className='w-12' src={user} alt='' />
      </div>
      <div className='flex '>
        <div className='drawer-side min-h-full'>
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

            <Link to='/' className='mt-auto mx-auto'>
              <button className=' border px-4 mx-auto m-2 rounded-md w-fit'>
                Home
              </button>
            </Link>
          </ul>
        </div>

        <div className='flex mx-auto'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
