import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content flex flex-col p-5 '>
          {/*  Page content here  */}
          {/* <h2 className='text-4xl text-secondary font-semibold py-2'>Welcome to Your  Dashboard</h2> */}
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='bg-primary/95 text-white  font-semibold menu overflow-y-auto w-48'>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
