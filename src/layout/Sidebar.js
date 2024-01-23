import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=' fixed  top-15 left-0  drawer-side h-[80%]'>
      <ul className='overflow-y-scroll bg-primary text-white font-semibold menu  w-40 h-screen'>
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

        <Link to='/' className='mb-14  mt-auto mx-auto'>
          <button className=' border px-4 mx-auto m-2 rounded-md w-fit'>
            Home
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
