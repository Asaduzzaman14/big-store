import React from "react";
import { BsAlarm } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <h3 className='font-bold text-2xl text-center text-secondary'>
        Dashboard
      </h3>
      <div className='grid justify-items-center mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <Link to={"addproduct"}>
          <div className='bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px]'>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>ADD PRODUCTS</h2>
          </div>
        </Link>

        <Link to={"allOrders"}>
          <div className=' bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px] '>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>ORDERS</h2>
          </div>
        </Link>

        <Link to={"allUsers"}>
          <div className=' bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px] '>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>USERS</h2>
          </div>
        </Link>

        <Link to={"allreviews"}>
          <div className=' bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px] '>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>REVIEWS</h2>
          </div>
        </Link>
        <Link to={"allproducts"}>
          <div className=' bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px] '>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>PRODUCTS</h2>
          </div>
        </Link>

        <Link to={"/"}>
          <div className=' bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-[200px] '>
            <div>
              <FaProductHunt className='text-3xl' />
            </div>
            <h2 className='font-semibold text-xl'>ORDERS</h2>
          </div>
        </Link>
      </div>

      <h2 className='font-bold text-2xl pt-4 text-center text-secondary'>
        Current Orders
      </h2>
    </div>
  );
};

export default AdminPanel;
