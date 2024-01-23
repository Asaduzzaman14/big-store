import React from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../Assates/Testimonials-img/person 1.png";
import "./dashboard.module.css";
import Sidebar from "./Sidebar";
import DashboardFooter from "../Components/Shared/DashboardFooter";
import { MdOutlineMenu } from "react-icons/md";
const Dashboard = () => {
  return (
    <>
      <div className=' sticky top-0 h-12 z-40 bg-gray-900 flex justify-between justify-items-center p-2 px-4 lg:p-2 lg:px-5 text-white'>
        <Link to={"/dashboard"}>
          <span className='flex justify-items-center normal-case text-xl text-secondary'>
            BIG<span className='text-white'>Shop</span>
          </span>
        </Link>
        <div className='flex place-items-center  gap-3 justify-center'>
          <img className='w-8' src={user} alt='' />
          <span className='cursor-pointer'>
            <MdOutlineMenu className='text-2xl' />
          </span>
        </div>
      </div>

      <div className=''>
        <Sidebar />

        <div className='ml-40 justify-end  bg-gray-300'>
          <div className='min-h-screen h-full'>
            <Outlet />
          </div>

          <div className='min-w-fit'>
            <div className='p-3 bg-gray-500 min-w-full'>
              <DashboardFooter />
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
    </>
  );
};

export default Dashboard;
