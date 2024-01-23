import React from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Assates/Testimonials-img/person 1.png";
import "./dashboard.module.css";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className=' sticky top-0 h-12 z-40 bg-gray-900 flex justify-between justify-items-center p-2 px-4 lg:p-2 lg:px-5 text-white'>
        <Link to={"/dashboard"}>
          <span className='flex justify-items-center normal-case text-xl text-secondary'>
            BIG<span className='text-white'>Shop</span>
          </span>
        </Link>
        <div className='flex place-content-center  gap-2 justify-center'>
          <img className='w-8' src={user} alt='' />
          <span className=''>Icon</span>
        </div>
      </div>

      <div className='flex'>
        <Sidebar />

        <div className='ml-40 justify-end bg-gray-300'>
          <div className='min-h-screen h-full'>
            <Outlet />
          </div>

          <div className='min-w-fit mt-auto'>
            <div className='p-3 bg-gray-500 min-w-full'>
              <h2 className='text-xl min-w-full'>
                Footer Lorem ipsum Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum pariatur nisi sapiente consequuntur
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
