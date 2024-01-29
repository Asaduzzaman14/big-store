import React from "react";
import Title from "../UI/Title";

const Contuct = () => {
  return (
    <div className='min-h-screen px-10 bg-gray-200'>
      <Title>
        <h2>Contuct</h2>
      </Title>
      <div>
        <span>Information</span>
        <div className='text-sm'>
          <span>
            Bigstore - Online Mega Store 442-Union Trade ipsum Doler Centre
            dhaka
          </span>
          <hr className='border border-1 text-red-500' />
          <div>call : 00002233</div>
        </div>
      </div>
      <div className=' flex flex-col gap-4'>
        <div>
          <p>Subject</p>
          <input
            className='py-1 rounded-sm w-80 mt-1   px-2'
            placeholder='Subject'
            type='text'
          />
        </div>
        <div>
          <p>Email address</p>
          <input
            type='text'
            className='py-1 rounded-sm w-80 mt-1   px-2'
            placeholder='Subject'
          />
        </div>
        <div>
          <p>Attachment</p>
          <input
            type='text'
            className='py-1 rounded-sm w-80 mt-1   px-2'
            placeholder='Subject'
          />
        </div>
        <div>
          <p>Message</p>
          <textarea
            type='text'
            className='py-1 rounded-sm w-80 mt-1   px-2'
            placeholder='Subject'
            cols={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Contuct;
