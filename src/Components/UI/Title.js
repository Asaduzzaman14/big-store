import React from "react";

const Title = ({ children }) => {
  return (
    <div className='px-2 min-h-screen'>
      <div className='font-bold text-2xl pt-5 text-center capitalize text-black'>
        {children}
      </div>
    </div>
  );
};

export default Title;
