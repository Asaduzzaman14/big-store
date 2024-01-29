import React from "react";
import Title from "../UI/Title";

const Contuct = () => {
  return (
    <div className='min-h-screen px-10 bg-gray-200'>
      <Title>
        <h2>Contuct</h2>
      </Title>
      <div className=' flex flex-col gap-4'>
        <div>
          <p>Subject</p>
          <input
            className='py-1 px-1 rounded-sm min-w-lg'
            placeholder='Subject'
            type='text'
          />
        </div>
        <div>
          <p>Email address</p>
          <input
            type='text'
            className='py-1 px-1 rounded-sm'
            placeholder='Subject'
          />
        </div>
        <div>
          <p>Attachment</p>
          <input
            type='text'
            className='py-1 px-1 rounded-sm'
            placeholder='Subject'
          />
        </div>
        <div>
          <p>Message</p>
          <textarea
            type='text'
            className='py-1 px-1 rounded-sm'
            placeholder='Subject'
            cols={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Contuct;
