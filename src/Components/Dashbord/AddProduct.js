import React from "react";

const AddProduct = () => {
  const handelFormSubmit = () => {};

  return (
    <div>
      <div>
        <div className=''>
          <h3 className='font-bold text-2xl mt-5 text-center text-secondary'>
            {"Add New Product"}
          </h3>

          <form
            onSubmit={handelFormSubmit}
            className='grid grid-cols-1 gap-5 mt-4 justify-items-center'
          >
            <input
              type='text'
              disabled
              value=''
              className='input  input-bordered input-secondary w-full max-w-xs'
            />
            <input
              type='text'
              disabled
              value=''
              className='input input-bordered input-secondary w-full max-w-xs'
            />

            <input
              type='text'
              name='name'
              value=''
              className='input focus:outline-none focus:border-2 input-bordered input-secondary w-full max-w-xs'
            />
            <input
              type='email'
              name='email'
              value=''
              className='input  focus:outline-none focus:border-2 input-bordered input-secondary w-full max-w-xs'
            />
            <input
              type='number'
              name='phone'
              placeholder='Phone'
              className='input  focus:outline-none focus:border-2 input-bordered input-secondary w-full max-w-xs'
            />

            <input
              type='submit'
              value={"Submit"}
              className='bg-secondary  focus:outline-none  hover:border-secondary hover:border-2  btn text-white input input-bordered input-secondary w-full max-w-xs'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
