import React from "react";

const AllOrder = () => {
  return (
    <div className='px-2 min-h-screen mt-3'>
      {/* <h3 className='font-bold text-2xl text-center text-black'>All Orders</h3> */}

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            P
          </span>
          <div>
            <p>Product</p>
            <span>00</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            O
          </span>
          <div>
            <p>Orders</p>
            <span>00</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3 border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            U
          </span>
          <div>
            <p>Users</p>
            <span>89</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            R
          </span>
          <div>
            <p>Review</p>
            <span>78</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            A
          </span>
          <div>
            <p>Admin</p>
            <span>22</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            O
          </span>
          <div>
            <p>Order Processing</p>
            <span>78</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            S
          </span>
          <div>
            <p>Total sell</p>
            <span>00</span>
          </div>
        </div>
        <div className='flex justify-between place-items-center px-3  border border-black py-3 rounded-md bg-[#03020c] text-white font-medium'>
          <span className='bg-[#737477] w-8 h-8 font-bold text-lg rounded-full flex justify-center place-items-center'>
            D
          </span>
          <div>
            <p>Delevard</p>
            <span>00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
