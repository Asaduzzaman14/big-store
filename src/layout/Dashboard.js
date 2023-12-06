import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2 className='bg-red-500'>header</h2>
      <div className='flex'>
        <div className='drawer-side min-h-full'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='bg-primary/95 text-white font-semibold menu overflow-y-auto w-40 h-screen'>
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
