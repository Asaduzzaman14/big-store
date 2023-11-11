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
      <div>
        
      <Link to={"/"}>
        <div className='bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-fit'>
          <div>
            <FaProductHunt className='text-3xl' />
          </div>
          <h2 className='font-semibold text-xl'>PRODUCTS</h2>
        </div>
      </Link>

      <Link to={"/"}>
        <div className='bg-primary cursor-pointer hover:bg-opacity-95 text-white gap-2 px-5 border border-gray-700 rounded-md text-center flex items-center flex-col p-3 w-fit'>
          <div>
            <FaProductHunt className='text-3xl' />
          </div>
          <h2 className='font-semibold text-xl'>ORDERS</h2>
        </div>
      </Link>

      
      
      </div>
    </div>
  );
};

export default AdminPanel;
